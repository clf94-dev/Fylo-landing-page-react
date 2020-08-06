import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Illustration1 from "../images/illustration-1.svg";

function Topsection() {
  return (
    <Grid container direction="row" className="top-cont reverse">
      <Grid item md={6} className="columns">
        <Grid container className="text-cont">
          <h1> All your files in one secure location, accessible anywhere.</h1>
          <h3>
            {" "}
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </h3>
          <Grid container direction="row">
            <Grid item md={9}>
              <input className="top-input" />
            </Grid>
            <Grid item md={3}>
              <Button variant="contained" className="getStarted-btn">
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} className="columns">
        <img alt="illustration1" className="illustration" src={Illustration1} />
      </Grid>
    </Grid>
  );
}

export default Topsection;
