import React from "react";
import { Column } from "simple-flexbox";
import { BrowserRouter as Router } from "react-router-dom";
import LogoComponent from "./logoComponent";
import MenuItem from "./menuItem";

const sideNav = {
  height: "100%",
  backgroundColor: "#061f31",
};

class SideMenu extends React.Component {
  render() {
    const activeIdx = this.props.idx;
    const items = this.props.items.map((x, idx) => {
      if (idx === activeIdx) {
        return <MenuItem isActive={true} name={x} />;
      } else {
        return <MenuItem isActive={false} name={x} />;
      }
    });
    return (
      <div>
        <Column>
          <LogoComponent />
        </Column>

        <Router>
          <Column style={sideNav}>{items}</Column>
        </Router>
      </div>
    );
  }
}

export default SideMenu;
