import React from "react";
import { NavLink } from "react-router-dom";

const NotMatch = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: 50,
        textAlign: "center",
      }}
    >
      <h2>Not Found</h2>
      <p>The requested URL was not found on this server!</p>
      <div className="redirect">
        <NavLink to="/">Home</NavLink>
      </div>
      <hr
        style={{
          height: "3px !important",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default NotMatch;
