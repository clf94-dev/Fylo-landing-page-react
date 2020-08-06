import React from "react";
//import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Illustration2 from "../images/illustration-2.svg";
import Arrow from "../images/icon-arrow.svg";
import Quotes from "../images/icon-quotes.svg";
import TestimonialIm from "../images/avatar-testimonial.jpg";

function Middlesection() {
  return (
    <Grid container direction="row" className="middle-cont reverse">
      <Grid item md={6}>
        <Grid container className="middle-text-cont">
          <h2> Stay productive, wherever you are </h2>
          <h5>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </h5>
          <h5>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </h5>
          <a className="link-middle" href="#">
            See how Fylo works{" "}
            <img alt="arrow" className="link-middle-icon" src={Arrow} />
          </a>

          <Card style={{ width: "25rem" }}>
            <CardContent className="card">
              <img alt="'" src={Quotes} />
              <p>
                {" "}
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <Grid container direction="row testimonial-row">
                <Grid item xs={2}>
                  <img
                    alt="testimonial"
                    className="testimonial-im"
                    src={TestimonialIm}
                  />
                </Grid>
                <Grid item xs={10} className="testimonial-data">
                  <h4> Kyle Burton</h4>
                  <h6>Founder & CEO, Huddle</h6>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <img alt="illustration2" className="illustration" src={Illustration2} />
      </Grid>
    </Grid>
  );
}

export default Middlesection;
