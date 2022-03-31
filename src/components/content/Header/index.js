import React, { useState } from "react";

import { Grid, Typography, Button, IconButton } from "@mui/material";
import { Github, Clipboard, Checkmark } from "../../widgets/Icons";

function Header() {
  const npmCommand = "npm i @react-native-koi-ui";
  const [copied, setCopied] = useState(false);

  const copyNPM = () => {
    navigator.clipboard.writeText(npmCommand);
    setCopied(true);
  };

  return (
    <Grid
      padding={10}
      container
      alignContent="center"
      height="100vh"
      sx={{ maxHeight: "900px" }}>
      <Grid marginBottom={10} xs={9}>
        <Typography variant="header1">{text[0]}</Typography>
        <Typography variant="body1">{text[1]}</Typography>
      </Grid>
      <Grid
        container
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center">
        <Grid
          onClick={copyNPM}
          container
          item
          xs={5}
          alignItems="center"
          justifyContent="space-between"
          sx={() => ({
            borderRadius: "14px",
            padding: "8px 16px",
            backgroundColor: "#f2f2f2",
            transition: "0.2s",
            border: "#bababa 1px solid",
            color: "#595959",
            "&:hover": {
              //boxShadow: theme.shadows[1],
              transition: "0.2s",
              backgroundColor: "#FFF",
              border: "#58A5FF 1px solid",
              color: "#58A5FF"
            }
          })}
          variant="body1">
          <Typography sx={{ fontFamily: "Poppins" }} variant="body2">
            {npmCommand}
          </Typography>
          <IconButton>
            {!copied ? (
              <Clipboard height="16px" width="16px" />
            ) : (
              <Checkmark fill="#58A5FF" height="16px" width="16px" />
            )}
          </IconButton>
        </Grid>
        <Button sx={{ margin: "0 16px" }}>{"Get Started"}</Button>
        <Button
          endIcon={<Github fill="grey" height={25} width={25} />}
          variant="outlined"
          target="_blank"
          href="https://github.com/annxiesun/KoiUI">
          {"Github"}
        </Button>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {};

const text = [
  "Create Seamless Mobile Experiences",
  "Koi UI is the first fully customizable, mobile-first React Native Library"
];

export default Header;
