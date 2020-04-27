import React from "react";

const BtnStyle = {
  padding: "0.5em 1em",
  fontSize: "18px",
  backgroundColor: "#599CCC",
  color: "#f1f1f1",
};

const BarStyle = {
  height: "10%",
  backgroundColor: "#006FBE",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
};

const UpperBar = () => (
  <div className="container-fluid" style={BarStyle}>
    <div>
      <a href="#">
        <button type="button" className="btn btn-primary" style={BtnStyle}>
          Log Out
        </button>
      </a>
    </div>
  </div>
);

export default UpperBar;
