import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";

import "./HeaderMiddle.css";
import { useSelector } from "react-redux";

const HeaderMiddle = () => {
  const [searchValue, setSearchValue] = useState("");

  const { cartWhenUserLogout } = useSelector((state) => state.cartReducer);

  return (
    <div className="header-middle">
      <div className="container">
        <div className="logo">
          <img
            src="data:image/webp;base64,UklGRlICAABXRUJQVlA4TEYCAAAvqEAREMegqG0byN3BH/KeoyAQSPJHXGaBQBLP/n6radsIKn9g92O5m25OQvfgnq3FA4CBoQCABNt22zYiqQo197L/pWaAjw9M7xH9d+C2jSMpu9eLMjsl84XyH5WoKuSHC6lcyPeWTYtvv4yYxYntG8ZBOJGcZNQuwiSgMxhk1x6ryKTFJxExoqDFFmm1g9KzEhpl/0I49CvUBT7N0GhQWU7ViQ6zdh8qgGPC0tuXwOKmjFp9bZ6SRNHtbFmrF9NnhB/ubedazrrSECpCSA+fE9DgbtIn3qjuOfDSY97XForD9Kr2ScwmP6tv2Hd7EbF/N8Swiep0jCiUrmva/D1QTM5lPQ1a44SM2gaN5hP7Q961oqVr7T4np+ZOMb31sPc7MppOpfDgk5O2d5+PVTc48l1tpmt1m24/SgkDzIC0qzp/RqSS0QEjvELE6W3WlHRvzT4bUyWjAaOShXOdOOnRvpH4Q9l0uQjwIKRBe39xdJ/pRr7gG6vXTgHxPZucl1/36/X+TgZMCwuWoyeM45RBztceZxWPXMBE25DfdvBTMMh3t61KkTB/v88mXok1hrN0rcX69qfAotbMcg+KG6qyjq+Id8s9trOQQI1RO+UFEidrDOvUUP3QSEI1xs1yA3CRVLWNpBEYD94ctRIEpMeCuWYSMNwDdTB4w8maIFAHO0/y4PcPbeONhMv+RBDcWbzARz4D5TQ7iZz4vdqGhBbnqUtwr+b8UBrOHreZQR/b/To+ox7gR2zjLzMl/bxfLvdX+V9TlAI="
            alt="Logo"
          />
        </div>
        <form className="search-box">
          <input
            type="text"
            placeholder="Search by name"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <Button variant="contained">Search</Button>
        </form>
        <div className="cart-wishlist">
          <NavLink to="/cart">
            <Tooltip title="Cart">
              <div>
                <span className="count">{cartWhenUserLogout.length}</span>
                <i className="fa fa-shopping-cart"></i>
                <span>Your Cart</span>
              </div>
            </Tooltip>
          </NavLink>
          <Tooltip title="Menu">
            <div className="bar">
              <div className="dropdown">
                <div data-bs-toggle="offcanvas" data-bs-target="#menu">
                  <i
                    className="fa fa-bars"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>
                  <span
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </span>
                </div>
              </div>
            </div>
          </Tooltip>
        </div>
        <DropDown />
      </div>
    </div>
  );
};

export default HeaderMiddle;
