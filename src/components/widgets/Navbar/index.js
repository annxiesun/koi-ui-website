import React from "react";

import { Grid, IconButton, Button, CardMedia } from "@mui/material";
import { Github, Discord } from "../Icons";

function Navbar() {
  return (
    <Grid
      sx={{
        backgroundColor: "#FFF",
        borderRadius: "32px",
        position: "fixed",
        top: "10px",
        left: "50%",
        width: "95%",
        zIndex: 90,
        boxSizing: "border-box",
        transform: "translateX(-50%)"
      }}
      padding={2}
      container
      alignContent="center"
      alignItems="center"
      justifyContent="space-between">
      <CardMedia
        component="img"
        sx={{ height: "50px", width: "auto" }}
        src={"resources/images/logo.svg"}
      />
      <Grid>
        <IconButton sx={{ marginLeft: "8px" }}>
          <Github fill="grey" height="30px" width="30px" />
        </IconButton>
        <IconButton sx={{ marginLeft: "8px" }}>
          <Discord fill="grey" height="30px" width="30px" />
        </IconButton>
        <Button sx={{ marginLeft: "8px" }}>{"Docs"}</Button>
      </Grid>
    </Grid>
  );
}

Navbar.propTypes = {};

export default Navbar;
