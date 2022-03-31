import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Grid, CardMedia } from "@mui/material";

function Parallax2() {
  return (
    <Grid sx={{ position: "relative" }}>
      <Parallax speed={-15}>
        <CardMedia
          sx={{
            height: "600px",
            width: "auto",
            objectFit: "contain"
          }}
          component="img"
          src="/resources/images/phoneDemo.png"
        />
      </Parallax>
      <Parallax speed={-10}>
        <CardMedia
          sx={{
            position: "absolute",
            bottom: "20px",
            height: "300px",
            objectFit: "contain",
            width: "auto",
            marginLeft: "50px"
          }}
          component="img"
          src="/resources/images/focusimage.png"
        />
      </Parallax>
      <Parallax speed={-8}>
        <CardMedia
          sx={{
            position: "absolute",
            bottom: "400px",
            height: "100px",
            objectFit: "contain",
            width: "auto",
            marginLeft: "250px"
          }}
          component="img"
          src="/resources/images/switches.png"
        />
      </Parallax>
    </Grid>
  );
}

export default Parallax2;
