import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./CustomNavbar.css"; // Import custom CSS

export default function CustomNavbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-5 navbar-light bg-white sticky-top">
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
            alt="TyrePlex"
            width="150"
            height="auto"
          />
        </a>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links with dropdowns */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="bikeTyresDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Car Tyres
              </a>
              <ul className="dropdown-menu" aria-labelledby="bikeTyresDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="//www.tyreplex.com/bike-tyres/mrf">
                    MRF Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Apollo Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CEAT Tyres
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="bikeTyresDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Bike Tyres
              </a>
              <ul className="dropdown-menu" aria-labelledby="bikeTyresDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="//www.tyreplex.com/bike-tyres/mrf">
                    MRF Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="tyrePressureDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Tyre Pressure
              </a>
              <ul className="dropdown-menu" aria-labelledby="tyrePressureDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="commercialTyresDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Commercial Tyres
              </a>
              <ul className="dropdown-menu" aria-labelledby="commercialTyresDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="accessoriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Accessories
              </a>
              <ul className="dropdown-menu" aria-labelledby="accessoriesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="moreDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="moreDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Login Icon and Link */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person"></i> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
