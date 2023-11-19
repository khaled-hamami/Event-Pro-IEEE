import { createTheme } from "@mui/material/styles"

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "rgb(255,255,255)",
    },
    primary: {
      main: "#00609C",
    },
    secondary: {
      main: "#6c3890",
    },
    contrast: {
      main: "#f8f8f8",
      reverse: "#333",
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "hsla(0,0%,0%,1)",
    },
    primary: {
      main: "#0996f6",
    },
    secondary: {
      main: "#b55ef1",
    },
    contrast: {
      main: "#333",
      reverse: "#f8f8f8",
    },
  },
})
