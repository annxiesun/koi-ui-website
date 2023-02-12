import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    header1: {
      fontFamily: "Poppins",
      fontSize: 72,
      fontWeight: 700,
      lineHeight: 1,
    },
    header2: {
      fontFamily: "Poppins",
      fontSize: 64,
      fontWeight: 700,
    },
    header3: {
      fontFamily: "Poppins",
      fontSize: 48,
      fontWeight: 700,
    },
    header4: {
      fontFamily: "Poppins",
      fontSize: 32,
      fontWeight: 700,
    },
    header5: {
      fontFamily: "Poppins",
      fontSize: 32,
    },
    body1: {
      fontFamily: "Nunito Sans",
      fontSize: 22,
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Nunito Sans",
      fontSize: 16,
      fontWeight: 400,
    },
    button: {
      fontFamily: "Poppins",
      fontSize: 24,
      textTransform: "normal",
    },
  },
  shadows: [
    "none",
    "0px 5px 50px 5px rgba(0,0,0,0.04)",
    "0px 5px 50px 5px rgba(0,0,0,0.1)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          padding: "4px 24px",
          borderRadius: "10px",
          background:
            "linear-gradient(150deg, rgba(88,165,255,1) 0%, rgba(96,228,221,1) 100%)",
        },
        outlined: {
          padding: "4px 24px",
          borderColor: "grey",
          color: "grey",
          borderRadius: "10px",
          "&:hover": {
            borderColor: "#696969",
            color: "#696969",
          },
        },
        text: {
          padding: "4px 24px",
          background: "rgba(256,256,256,0.3)",
          color: "white",
          borderRadius: "10px",
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: "contained",
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: "contained",
      },
    },
  },
});

export default theme;
