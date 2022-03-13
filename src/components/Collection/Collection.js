import React from "react";
import { NavLink } from "react-router-dom";
import "./Collection.css";

const Collection = ({ data }) => {
  return (
    <NavLink to={`/collections/${data.section}`}>
      <div className="collection">
        <img src={data.img} alt="img" />
        <div className="text-box">
          <h3>{data.title}</h3>
          <p>
            Shop now <i className="fa fa-arrow-circle-right"></i>
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Collection;
