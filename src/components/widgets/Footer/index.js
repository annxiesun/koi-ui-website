import React from "react";

import { Grid, IconButton, CardMedia, Typography } from "@mui/material";
import { Github, Discord } from "../Icons";

function Footer() {
  return (
    <Grid
      sx={{
        backgroundColor: "#FFF",
        borderRadius: "32px",
        width: "100%",
        zIndex: 90,
        boxSizing: "border-box",
        paddingBottom: "30px"
      }}
      padding={10}
      container
      alignContent="center"
      alignItems="center"
      justifyContent="center">
      <Grid container alignItems="center" flexDirection="column">
        <Typography variant="body2">Made proudly in 🇨🇦</Typography>
        <Grid marginBottom={6}>
          <IconButton>
            <Github fill="grey" height="20px" width="20px" />
          </IconButton>
          <IconButton sx={{ marginLeft: "8px" }}>
            <Discord fill="grey" height="20px" width="20px" />
          </IconButton>
        </Grid>
        <CardMedia
          component="img"
          sx={{ height: "30px", width: "100px", objectFit: "contain" }}
          src={"resources/images/logoicon.svg"}
        />
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {};

export default Footer;
