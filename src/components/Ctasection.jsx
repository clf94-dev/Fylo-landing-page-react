import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
function Ctasection() {
  return (
    <div className="cta-div">
      <Grid container className="cta-cont">
        <Grid item md={6} className="cta-text">
          <h2>Get early access today</h2>
          <h4>
            {" "}
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </h4>
        </Grid>
        <Grid item md={6}>
          <TextField
            style={{
              backgroundColor: "white"
            }}
            id="filled-basic"
            label="email@example.com"
            variant="filled"
            className="cta-input"
          />
          <Button variant="contained" className="get-started-btn ">
            Get Started for Free
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Ctasection;
