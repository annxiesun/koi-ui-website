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
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: 'contained',
      },
    },
  },
});

export default theme;