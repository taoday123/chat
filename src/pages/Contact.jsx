import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/authContext";
import StripeCheckout from "react-stripe-checkout";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { currentUser } = useContext(AuthContext);
  const [amount, setAmount] = useState(0);
  const nav = useNavigate();
  const handleToken = async (token) => {
    const resp = await axios.post(
      "http://localhost:8800/backend/payments/donate",
      {
        token,
        amount,
      }
    );
    alert(await resp.data?.message);
    window.location.assign(window.location.href);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };
  useEffect(() => {
    if (!currentUser) {
      alert("Bạn cần đăng nhập để donate");
      nav("/login");
    }
  }, []);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <FormControl sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={amount}
          onChange={handleAmountChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
        />
      </FormControl>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE || ""}
        token={handleToken}
        name=""
        panelLabel={`Donate`}
        currency="USD"
        amount={amount * 100}
      ></StripeCheckout>
    </div>
  );
};

export default Contact;
