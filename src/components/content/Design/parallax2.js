import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Grid, CardMedia } from "@mui/material";

function Parallax2() {
  return (
    <Grid sx={{ position: "relative" }}>
      <Parallax speed={-15}>
        <CardMedia
          sx={(theme) => ({
            height: "600px",
            width: "auto",
            objectFit: "contain",
            boxShadow: theme.shadows[1],
            borderRadius: "30px"
          })}
          component="img"
          src="/resources/images/phonedemo.png"
        />
      </Parallax>
      <Parallax speed={-10}>
        <CardMedia
          sx={() => ({
            position: "absolute",
            bottom: "20px",
            height: "300px",
            objectFit: "contain",
            width: "auto",
            marginLeft: "50px"
          })}
          component="img"
          src="/resources/images/focusimage.png"
        />
      </Parallax>
      <Parallax speed={-8}>
        <CardMedia
          sx={(theme) => ({
            position: "absolute",
            bottom: "400px",
            height: "100px",
            objectFit: "contain",
            width: "auto",
            marginLeft: "250px",
            boxShadow: theme.shadows[2],
            borderRadius: "20px"
          })}
          component="img"
          src="/resources/images/switches.png"
        />
      </Parallax>
    </Grid>
  );
}

export default Parallax2;
