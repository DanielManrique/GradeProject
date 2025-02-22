import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu({ logOut }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src="https://www.perceptio.co/wp-content/uploads/2018/12/cropped-logo.png"
            width="200"
            height="40"
            className="d-inline-block align-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Empty">
                Data Base <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ApplicantTable">
                Alarms
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="https://media.glassdoor.com/sqll/919617/perceptio-squarelogo-1542197061380.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" target="_blank" href="http://190.248.92.106:3100/api/terms/manual">
                  Help
                </a>
                <div className="dropdown-item" onClick={logOut}>
                  Sign out
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
