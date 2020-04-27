import React from "react";
import { Row } from "simple-flexbox";
import { NavLink } from "react-router-dom";

function MenuItem(props) {
  const activeItem = {
    textDecoration: "none",
    fontSize: "20px",
    color: "#f1f1f1",
  };

  const normalItem = {
    textDecoration: "none",
    fontSize: "20px",
    color: "#818181",
  };

  const { isActive, name } = props;
  return (
    <Row horizontal="center" vertical="center">
      <NavLink style={isActive ? activeItem : normalItem} to="#">
        {name}
      </NavLink>
    </Row>
  );
}

export default MenuItem;
