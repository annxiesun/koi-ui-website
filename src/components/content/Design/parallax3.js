import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Grid, CardMedia } from "@mui/material";

function Parallax3() {
  return (
    <Grid sx={{ position: "relative" }}>
      <Grid
        container
        marginBottom={5}
        flexDirection="row"
        alignItems="flex-end">
        <Parallax speed={-5}>
          <CardMedia
            sx={{
              height: "150px",
              width: "auto",
              objectFit: "contain",
              padding: "8px"
            }}
            component="img"
            src="/resources/images/checks.png"
          />
        </Parallax>
        <Parallax speed={-9}>
          <CardMedia
            sx={{
              height: "80px",
              objectFit: "contain",
              width: "auto",
              padding: "8px"
            }}
            component="img"
            src="/resources/images/checklabel.png"
          />
        </Parallax>
        <Parallax speed={-6}>
          <CardMedia
            sx={{
              width: "300px",
              objectFit: "contain",
              height: "auto",
              padding: "8px"
            }}
            component="img"
            src="/resources/images/inputs.png"
          />
        </Parallax>
      </Grid>
      <Grid container flexDirection="row" alignItems="flex-start">
        <Parallax speed={-8}>
          <CardMedia
            sx={{
              height: "auto",
              width: "300px",
              objectFit: "contain",
              padding: "8px"
            }}
            component="img"
            src="/resources/images/buttons.png"
          />
        </Parallax>
        <Parallax speed={-12}>
          <CardMedia
            sx={{
              height: "100%",
              objectFit: "contain",
              width: "auto",
              padding: "8px"
            }}
            component="img"
            src="/resources/images/radio.png"
          />
        </Parallax>
        <Parallax speed={-10}>
          <CardMedia
            sx={{
              width: "auto",
              objectFit: "contain",
              height: "100px",
              padding: "8px"
            }}
            component="img"
            src="/resources/images/switches2.png"
          />
        </Parallax>
      </Grid>
    </Grid>
  );
}

export default Parallax3;
