import React from "react";

import Grid from "@material-ui/core/Grid";

import Logo from "../images/logo.svg";
import Phone from "../images/icon-phone.svg";
import Email from "../images/icon-email.svg";

function FooterSection() {
  return (
    <div className="footer">
      <Grid container>
        <img alt="logo" src={Logo} />
        <Grid container direction="row">
          <Grid item lg={3} xs={12}>
            <Grid container direction="row" className="contact-row">
              <img alt="telephone" src={Phone} className="phone-img" />
              <h4> +1-543-123-4567</h4>
            </Grid>
            <Grid container direction="row" className="contact-row">
              <img alt="email" src={Email} className="email-img" />
              <h4> example@fylo.com</h4>
            </Grid>
          </Grid>

          <Grid item lg={3} xs={12} className="footer-links">
            <h4>About Us</h4>
            <h4>Jobs</h4>
            <h4> Press</h4>
            <h4>Blog</h4>
          </Grid>
          <Grid item lg={3} xs={12} className="footer-links">
            <h4> Contact Us</h4>
            <h4>Terms</h4>
            <h4>Privacy</h4>
          </Grid>
          <Grid item lg={3} xs={12} className="footer-links">
            <h4>Privacy</h4>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterSection;
