import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
export const Donate = (props) => {
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Card ID",
      selector: (row) => row.card_id,
    },
    {
      name: "Donated At",
      selector: (row) => row.created_at,
    },
  ];
  const filterData = (data) => {
    return data.map((val, index) => {
      const cardData = JSON.parse(val.data_card);
      console.log(cardData);

      return {
        email: val.email,
        amount: val.amount,
        card_id: cardData.id,
        created_at: new Date(cardData.created * 1000).toUTCString(),
      };
    });
  };
  useEffect(() => {
    const bsSyns = async () => {
      const resp = await axios.get(
        "http://localhost:8800/backend/payments/history"
      );
      if (resp.status === 200) {
        setData(filterData(await resp.data));
      }
      if (resp.status > 400) {
        alert("fetch data failed");
      }
    };
    bsSyns();
  }, []);

  return (
    <div id="layoutSidenav_content">
      <div className="container-fluid px-4 py-5 mt-5">
        <div className="card mb-4">
          <div className="card-header">Donate histories</div>
          <div className="card-body">
            <DataTable columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
