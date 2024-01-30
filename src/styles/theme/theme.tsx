import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // define custom breakpoints for media styling
  breakpoints: {
    values: {
      xxs: 0,
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  // define custom color theme here for MUI components
  palette: {
    primary: {
      main: "#222463",
    },
  },
  components: {
    // Override default MuiButton styles
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: "white",
          // borderRadius: "40px",
          padding: "18px 24px",
          // textTransform: "none",
          "&:hover": {
            // backgroundColor: "grey",
            color: "#ff8f3b",
          },
        },
      },
    },
  },
  typography: {
    h2: {
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "4rem",
      },
    },
    h3: {
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3rem",
      },
    },
    h4: {
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.4rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.6rem",
      },
    },
    h6: {
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.4rem",
      },
    },
    body1: {
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.4rem",
      },
    },
    body2: {
      "@media (max-width:600px)": {
        fontSize: "0.6rem",
      },
      "@media (min-width:600px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.2rem",
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
