import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@mui/material";
import styles from "./styles";

function Header() {
  return (
    <Grid padding={10} container alignContent="center" height="100vh">
      <Grid marginBottom={10} xs={9}>
        <Typography variant="header1">{text[0]}</Typography>
        <Typography variant="body1">{text[1]}</Typography>
      </Grid>
      <Grid container flexDirection="row" justifyContent="flex-start">
        <Typography variant="body1">{"npm i @react-native-koi-ui"}</Typography>
        <Button>{"Get Started"}</Button>
        <Button variant="outlined">{"Github"}</Button>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {};

const text = [
  "Create Seamless Mobile Experiences",
  "Koi UI is the first fully customizable, mobile-first React Native Library"
];

export default withStyles(styles)(Header);
