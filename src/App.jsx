import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { ThemeProvider } from "@emotion/react"
import { darkTheme, lightTheme } from "./config/theme"
import { Routes, Route } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Events from "./pages/Events"
import About from "./pages/About"
import Admin from "./pages/Admin"
import Error from "./pages/Error"
function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box
        className="background"
        sx={{
          backgroundColor: "background.default",
          backgroundImage: darkMode ? darkBgStyle : lightBgStyle,
          color: "primary.main",
          overflow: "hidden",
        }}
      >
        <Router>
          <Navbar setTheme={setDarkMode} />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/events" Component={Events} />
            <Route path="/admin" Component={Admin} />
            <Route path="/about" Component={About} />
            <Route path="/*" Component={<Error />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  )
}

export default App
const lightBgStyle = `
  radial-gradient(at 2% 3%,rgb(105, 96, 238) 0px,transparent 50%),
  radial-gradient(at 0% 0%, rgb(255, 255, 255) 0px, transparent 50%),
  radial-gradient(at 26% 68%, rgb(255, 255, 255) 0px, transparent 50%),
  radial-gradient(at 98% 4%, rgb(105, 96, 238) 0px, transparent 50%),
  radial-gradient(at 0% 89%, rgb(105, 96, 238) 0px, transparent 50%);
`

const darkBgStyle = `
  radial-gradient(at 2% 3%, hsla(254,100%,10%,1) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(60,0%,0%,1) 0px, transparent 50%),
  radial-gradient(at 26% 68%, hsla(240,0%,0%,1) 0px, transparent 50%),
  radial-gradient(at 98% 4%, hsla(254,100%,9%,1) 0px, transparent 50%),
  radial-gradient(at 0% 89%, hsla(254,100%,10%,1) 0px, transparent 50%);
`
