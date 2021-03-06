import React, { useState, useEffect } from "react";
import "./sidebarmenu.scss";

import { NavLink, Link, Routes, Route } from "react-router-dom";

import MarketPlace from "../MarketPlace/MarketPlace";
import Dashboard from "../Dashboard/Dashboard";
import Collection from "../Dashboard/Collection/Collection";
import Create from "../Dashboard/Create/Create";
import Guide from "../MarketPlace/Guide/Guide";

window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");

  if (sidebarToggle) {
    if (localStorage.getItem("sb|sidebar-toggle") === "true") {
      document.body.classList.toggle("sb-sidenav-toggled");
    }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});

export default function Sidebarmenu() {
  // const [inactive, setInactiv e] = useState(false);

  // useEffect(() => {});

  return (
    <div class="d-flex" id="wrapper">
      <div class="border-end bg-white" id="sidebar-wrapper">
      
        <div class="list-group list-group-flush">
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/marketplace"
          >
            MarketPlace
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/dashboard/collection"
          >
            Wallet
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/dashboard/create"
          >
            Create
          </Link>
        </div>
      </div>
      <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-primary border-bottom">
          <div class="container-fluid">
            <button class="btn btn-primary" id="sidebarToggle">
              MENU
            </button>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                {/* <li class="nav-item active">
                  <a class="nav-link" href="#!">
                    Home{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Link
                  </a>
                </li> */}
                {/* <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-white"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <a class="dropdown-item" href="#!">
                      English
                    </a>
                    <a class="dropdown-item" href="#!">
                      Portuguese
                    </a>
                  
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div class="container-fluid">
          {/* <h1 class="mt-4">Simsplex Sidebar</h1> */}
          <Routes>
            <Route
              path="/marketplace"
              element={<MarketPlace></MarketPlace>}
            ></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route
              path="/dashboard/collection"
              element={<Collection></Collection>}
            ></Route>
            <Route path="/dashboard/create" element={<Create></Create>}></Route>
            <Route path="/guide" element={<Guide></Guide>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
