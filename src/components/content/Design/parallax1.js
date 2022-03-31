import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Grid, CardMedia } from "@mui/material";

function Parallax1() {
  return (
    <Grid sx={{ position: "relative" }}>
      <Parallax speed={-10}>
        <CardMedia
          sx={(theme) => ({
            height: "200px",
            width: "auto",
            objectFit: "contain",
            marginLeft: "32px",
            boxShadow: theme.shadows[1],
            borderRadius: "20px"
          })}
          component="img"
          src="/resources/images/colors.png"
        />
      </Parallax>
      <Parallax speed={-15}>
        <CardMedia
          sx={(theme) => ({
            position: "absolute",
            top: 0,
            height: "100px",
            objectFit: "contain",
            width: "auto",
            boxShadow: theme.shadows[1],
            borderRadius: "20px"
          })}
          component="img"
          src="/resources/images/iconcolors.png"
        />
      </Parallax>
    </Grid>
  );
}

export default Parallax1;
