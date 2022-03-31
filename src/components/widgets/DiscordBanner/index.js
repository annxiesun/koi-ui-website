import React from "react";

import { Grid, Typography, Button, CardMedia } from "@mui/material";

function DiscordBanner() {
  return (
    <Grid
      sx={{ backgroundColor: "#5865F2", borderRadius: "32px" }}
      padding={5}
      container
      alignContent="center"
      alignItems="center"
      justifyContent="space-between">
      <Grid container xs={9} flexDirection="row" alignItems="center">
        <CardMedia
          component="img"
          sx={{ height: "50px", width: "auto", marginRight: "24px" }}
          src="resources/images/discord.svg"
        />
        <Grid>
          <Typography sx={{ color: "white" }} variant="header3">
            {text[0]}
          </Typography>
          <Typography sx={{ color: "white" }} variant="body1">
            {text[1]}
          </Typography>
        </Grid>
      </Grid>
      <Button>{"Join the #Koi Discord"}</Button>
    </Grid>
  );
}

DiscordBanner.propTypes = {};

const text = [
  "Join our Discord!",
  "Ask questions, report issues, and meet people!"
];

export default DiscordBanner;
