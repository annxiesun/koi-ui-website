import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Grid, Typography } from "@mui/material";
import Parallax1 from "./parallax1";
import Parallax2 from "./parallax2";
import Parallax3 from "./parallax3";

function Design() {
  return (
    <ParallaxProvider>
      <Grid
        padding={10}
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="auto">
        <Grid marginBottom={50} xs={9} container justifyContent="center">
          <Typography align="center" variant="header2">
            {text[0]}
          </Typography>
          <Typography align="center" variant="header5">
            {text[1]}
          </Typography>
        </Grid>
        <Grid
          marginBottom={50}
          container
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Grid flexDirection="column" xs={12} md={5}>
            <Typography variant="header3">{content[0].title}</Typography>
            <Typography variant="body1">{content[0].text}</Typography>
          </Grid>
          {content[0].graphic}
        </Grid>
        <Grid
          marginBottom={50}
          container
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          {content[1].graphic}
          <Grid flexDirection="column" xs={12} md={5}>
            <Typography variant="header3">{content[1].title}</Typography>
            <Typography variant="body1">{content[1].text}</Typography>
          </Grid>
        </Grid>
        <Grid
          marginBottom={30}
          container
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Grid flexDirection="column" xs={12} md={5}>
            <Typography variant="header3">{content[2].title}</Typography>
            <Typography variant="body1">{content[2].text}</Typography>
          </Grid>
          {content[2].graphic}
        </Grid>
      </Grid>
    </ParallaxProvider>
  );
}

Design.propTypes = {};

const text = [
  "A Unique Design Philosphy",
  "Inspired by leading modern day apps"
];

const content = [
  {
    graphic: <Parallax1 />,
    title: "Minimal Color",
    text: "Focus on simplicity where colours have meaning."
  },
  {
    graphic: <Parallax2 />,
    title: "Mobile First",
    text: "Components built around the best modern mobile app practices."
  },
  {
    graphic: <Parallax3 />,
    title: "Consistency being key",
    text: "A fast and simple solution for highly customized components through theming"
  }
];

export default Design;
