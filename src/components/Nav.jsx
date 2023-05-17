import React from "react";
import { Link } from "react-router-dom";
import StickyNav from "./StickyNav";

const Nav = () => {
  return (
    <>
      <nav
        className="navbar shadow navbar-expand-lg px-2 px-lg-5 d-flex flex-column"
        style={{
          position: "relative",
          height: "70px",
          backgroundColor: "white",
          borderBottomRightRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
      >
        <div className="container-fluid h-100" style={{ top: "0px", padding: '0px' }}>
        <div className="logo-icon-div d-flex justify-content-between w-auto" style={{backgroundColor: ''}}>
        <Link
            className="navbar-brand w-auto h-100 position-relative d-flex"
            to="/"
          >
            <img
              src="pic/ade.png"
              alt="Logo"
              className="my-auto logo"
              style={{ height: "50px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
          <div
            className="collaps navbar-collapse"
            id="navbarSupportedContent"
            style={{ height: "80px" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="sign-in-lg d-flex justify-content-between my-3 w-100 gap-3">
                <StickyNav
                  name="register"
                  icon="fas fa-circle-plus"
                  to_where="/SignUp"
                  styles={{border: '1px solid gray', width: '50%', padding: '5px 0px', justifyContent: 'center'}}
                ></StickyNav>
                <StickyNav
                  name="login"
                  icon="fas fa-right-to-bracket"
                  to_where="/SignIn"
                  styles={{border: '1px solid gray', width: '50%', padding: '5px 0px', justifyContent: 'center'}}
                ></StickyNav>
              </div>
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">event</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact US</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
