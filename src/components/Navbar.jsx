import React, { useContext } from 'react'
import Logo from "../img/logo.png"
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Navbar = () => {
   const {currentUser, Logout} = useContext(AuthContext)
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
            <Link to="/">
                <img src={Logo} alt="" />
               </Link>
            </div>
            <div className="links">
                <Link className="link" to="/">
                   <h6> Trang Chủ </h6>
                </Link>
                <Link className="link" to="/t">
                   <h6> Toàn Bộ Dự Án</h6>
                </Link>
               
                <Link className="link" to="/donate2">
                   <h6> Lịch Sử Donate</h6>
                </Link>
                

                <span>{currentUser?.username}</span>
                {currentUser ?(
                <span onClick={Logout}>Đăng Xuất</span>
                ) : (<Link className="link" to="/Login">
                  Login
                  </Link>
                  )}
                <span className="phanhoi">
                    <Link className="link" to="/lienhe">Donate</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
