import React from "react";
//import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//import Logo from "../images/logo.svg";
import Navbar from "./Navbar";
import Topsection from "./Topsection";
import Middlesection from "./Middlesection";
import Ctasection from "./Ctasection";
import Footersection from "./Footersection";

function App() {
  return (
    <div>
      <Navbar />
      <Topsection />
      <Middlesection />
      <Ctasection />
      <Footersection />
    </div>
  );
}

export default App;
