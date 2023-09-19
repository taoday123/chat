import { Outlet, Link, useNavigate } from "react-router-dom";
import "../../../bs.css";
import { AuthContext } from "../../../context/authContext";
import { useContext, useEffect } from "react";
export const AdminLayout = (props) => {
  const { currentUser } = useContext(AuthContext);
  const nav = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      nav("/");
      return;
    }
    if (currentUser.roles !== "admin") {
      nav("/");
      return;
    }
  }, []);
  return (
    <div className="sb-nav-fixed">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">
          Admin
        </a>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Outlet />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <Link
                  to={"/admin/users"}
                  className="nav-link"
                  href="tables.html"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-user"></i>
                  </div>
                  Users
                </Link>
                <Link
                  to={"/admin/donate"}
                  className="nav-link"
                  href="tables.html"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-donate"></i>
                  </div>
                  Donate Histories
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
