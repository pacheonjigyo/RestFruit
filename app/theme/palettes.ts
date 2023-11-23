import { type PaletteOptions } from "@mui/material/styles";

export const light: PaletteOptions = {
  mode: "light",

  primary: {
    main: "#F6C97B",
  },

  secondary: {
    main: "#000000",
  },

  info: {
    main: "#FFFFFF",
  },

  background: {
    paper: "#ffffff",
    default: "#f5f7f6",
  },

  example: {
    primary: "#49b4ff",
    secondary: "#ef3054",
  },

  text: {
    primary: "#000000",
    secondary: "#959595",
  },
};

export const dark: PaletteOptions = {
  mode: "dark",

  primary: {
    main: "#ec6b6b",
  },

  secondary: {
    main: "#ffffff",
  },

  info: {
    main: "#515151",
  },

  background: {
    paper: "#1f1f1f",
    default: "#2d2d2d",
  },

  example: {
    primary: "#49b4ff",
    secondary: "#ef3054",
  },
};

export default { light, dark };
declare module "@mui/material/styles" {
  interface Palette {
    example: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    example: {
      primary: string;
      secondary: string;
    };
  }
}
