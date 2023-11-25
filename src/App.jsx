import { Box } from "@mui/material"
import React, { useState } from "react"
import { ThemeProvider } from "@emotion/react"
import { darkTheme, lightTheme } from "./config/theme"
import { Routes, Route } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import BottomNavigation from "./components/MobileNav"
import Home from "./pages/Home"
import Loader from "./components/Loader"
import Admin from "./pages/Admin"
const Events = React.lazy(() => import("./pages/Events"))
const About = React.lazy(() => import("./pages/About"))
const Login = React.lazy(() => import("./pages/Login"))
const Error = React.lazy(() => import("./pages/Error"))
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
            <Route path="/" element={<Home />} />
            <Route
              path="/events"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Events />
                </React.Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Login />
                </React.Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <React.Suspense fallback={<Loader />}>
                  <About />
                </React.Suspense>
              }
            />
            <Route
              path="/admin"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Admin />
                </React.Suspense>
              }
            />

            <Route
              path="/*"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Error />
                </React.Suspense>
              }
            />
          </Routes>
          <BottomNavigation setTheme={setDarkMode} />
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
