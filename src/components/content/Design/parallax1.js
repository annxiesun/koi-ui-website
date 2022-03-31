import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Grid, CardMedia } from "@mui/material";

function Parallax1() {
  return (
    <Grid sx={{ position: "relative" }}>
      <Parallax speed={-10}>
        <CardMedia
          sx={{
            height: "200px",
            width: "auto",
            objectFit: "contain",
            marginLeft: "32px"
          }}
          component="img"
          src="/resources/images/colors.png"
        />
      </Parallax>
      <Parallax speed={-15}>
        <CardMedia
          sx={{
            position: "absolute",
            top: 0,
            height: "100px",
            objectFit: "contain",
            width: "auto"
          }}
          component="img"
          src="/resources/images/iconcolors.png"
        />
      </Parallax>
    </Grid>
  );
}

export default Parallax1;
