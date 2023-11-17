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
      main: "#fff",
      reverse: "#000",
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
      main: "#00609C",
    },
    secondary: {
      main: "#b55ef1",
    },
    contrast: {
      main: "#000",
      reverse: "#fff",
    },
  },
})
