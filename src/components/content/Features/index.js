import React from "react";
import { Grid, Typography, CardMedia } from "@mui/material";

function Features() {
  return (
    <Grid
      sx={(theme) => ({
        padding: theme.spacing(10),
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(4)
        },
        width: "100%"
      })}
      container
      justifyContent="center"
      height="100vh">
      <Grid marginBottom={10} xs={9} container justifyContent="center">
        <Typography align="center" variant="header2">
          {text[0]}
        </Typography>
        <Typography align="center" variant="header4">
          {text[1]}
        </Typography>
      </Grid>
      <Grid
        container
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="flex-start">
        {features.map((feature, i) => (
          <Grid
            key={`feature-${i}`}
            xs={6}
            md={4}
            container
            flexDirection="column"
            alignItems="center"
            marginBottom={5}>
            <CardMedia
              component="img"
              sx={{ width: "80px", height: "80px", objectFit: "contain" }}
              src={`/resources/images/${feature.icon}.svg`}
              alt={feature.icon}
            />
            <Typography align="center" variant="body1">
              {feature.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

Features.propTypes = {};

const text = [
  "Opinionated Features",
  "Perfect balance between simplicity & customizability"
];
const features = [
  {
    icon: "compass",
    text: "Native inspired design"
  },
  {
    icon: "css",
    text: "Theming with full styling support"
  },
  {
    icon: "smartphone",
    text: "Mobile-first Experience"
  },
  {
    icon: "icons",
    text: "480 Modern Icons"
  },
  {
    icon: "text",
    text: "Keep consistency with shadows, colors, & spacing"
  },
  {
    icon: "boxes",
    text: "10+ Ready to use Components"
  }
];

export default Features;
