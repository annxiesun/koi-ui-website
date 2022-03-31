import React from "react";
import { Grid, Typography, Button } from "@mui/material";

function Demo() {
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
      alignItems="center"
      flexDirection="column"
      height="auto">
      <Grid
        marginBottom={10}
        xs={9}
        container
        justifyContent="center"
        flexDirection="column">
        <Typography align="center" variant="header2">
          {text[0]}
        </Typography>
        <Typography align="center" variant="header5">
          {text[1]}
        </Typography>
      </Grid>
      <iframe
        width={1000}
        height={800}
        src="https://snack.expo.dev/@annxiesun/koi-ui-demo?platform=ios&name=Demo&dependencies=expo-font%2Cexpo-constants%2Creact-native-svg%2Creact-native-koi-ui&supportedplatforms=ios%2Candroid"
      />
      <Button sx={{ marginTop: "48px" }}>{"See Docs"}</Button>
    </Grid>
  );
}

Demo.propTypes = {};

const text = ["Build Modern UIs Quickly", "Test it out!"];

export default Demo;
