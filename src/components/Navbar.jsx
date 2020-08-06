import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import Logo from "../images/logo.svg";

function Navbar() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <img alt="logo" src={Logo} />
        <div className="navbar-btn">
          <Button color="inherit">Features</Button>
          <Button color="inherit">Team</Button>
          <Button color="inherit">Sign In</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
