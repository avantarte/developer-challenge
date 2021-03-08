import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    dark: "#17191C",
    storm: "#6B707C",
    cloud: "#C0C4CD",
    light: "#E5E6EA",
    subtle: "#F3F3F6",
    white: "#fff",
  },
  fontSizes: {
    small: "9px",
    medium: "12px",
  },
  fontStandard: ["MaisonNeue-Mono", "sans-sarif"].join(","),
  header: {
    visuallyHidden: {
      position: "absolute",
      width: "1px",
      height: "1px",
      margin: "-1px",
      padding: 0,
      border: 0,
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
    },
    boxShadowSm: {
      boxShadow: "0px 1px 3px 0px rgba(37,32,31,.3) !default",
    },
  },
};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
