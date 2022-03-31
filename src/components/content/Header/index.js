import React from "react";

import { Grid, Typography, Button, IconButton } from "@mui/material";
import { Github, Clipboard } from "../../widgets/Icons";

function Header() {
  return (
    <Grid
      padding={10}
      container
      alignContent="center"
      height="100vh"
      sx={{ maxHeight: "900px" }}>
      <Grid marginBottom={10} xs={9}>
        <Typography variant="header1">{text[0]}</Typography>
        <Typography variant="body1">{text[1]}</Typography>
      </Grid>
      <Grid
        container
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center">
        <Grid
          container
          item
          xs={5}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            borderRadius: "14px",
            padding: "8px 16px",
            backgroundColor: "#ededed"
          }}
          variant="body1">
          <Typography
            sx={{ fontFamily: "Poppins", color: "#595959" }}
            variant="body2">
            {"npm i @react-native-koi-ui"}
          </Typography>
          <IconButton>
            <Clipboard height="16px" width="16px" />
          </IconButton>
        </Grid>
        <Button sx={{ margin: "0 16px" }}>{"Get Started"}</Button>
        <Button
          endIcon={<Github fill="grey" height={25} width={25} />}
          variant="outlined">
          {"Github"}
        </Button>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {};

const text = [
  "Create Seamless Mobile Experiences",
  "Koi UI is the first fully customizable, mobile-first React Native Library"
];

export default Header;
