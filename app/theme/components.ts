import { type Palette, type ThemeOptions } from "@mui/material/styles";

export const components = (palette: Palette): ThemeOptions["components"] => ({
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "unset",
        fontWeight: "bold",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          background: "white",
          color: "#333333",

          boxShadow: "none",
        },
      },
      text: {
        "&:hover": {
          background: "transparent",
        },
      },
      containedInherit: {
        background: palette.mode === "light" ? "whitesmoke" : "#333333",

        "&:hover": {
          background: "white",
          color: "#333333",

          boxShadow: "none",
        },
      },
    },
  },

  MuiButtonGroup: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
});
