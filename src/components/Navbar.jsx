import styled from "@emotion/styled"
import { AppBar, Button, Switch, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router"
import IEEElogo from "../assets/Images/IEEElogo.png"
import { useTheme } from "@emotion/react"
import { useEffect, useState } from "react"
import("../styles/index.css")
export default function Navbar({ setTheme }) {
  const theme = useTheme()
  const navigate = useNavigate()
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    let timeout

    const handleScroll = () => {
      if (!scrolling) {
        setScrolling(true)
      }

      clearTimeout(timeout)

      timeout = setTimeout(() => {
        setScrolling(false)
      }, 1500)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolling])

  return (
    <AppBar
      className={scrolling ? "hidden" : ""}
      sx={{
        bgcolor: "rgba(0, 96, 156, .2)",
        display: "flex",
        position: "fixed",
        top: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backdropFilter: "blur(15px)",
        transition: "transform 0.3s ease",
        transform: scrolling ? "translateY(-100%)" : "none",
      }}
    >
      <div
        onClick={() => navigate("/")}
        style={{ width: "100px", height: "100%", cursor: "pointer" }}
      >
        <img
          src={IEEElogo}
          alt="logo"
          style={{ width: "100%", filter: theme.palette.mode == "dark" ? "brightness(1.5)" : "" }}
        />
      </div>
      <CustomNavLink style={{ fontSize: "1rem" }} to="/">
        HOME
      </CustomNavLink>
      <CustomNavLink style={{ fontSize: "1rem" }} to="/events">
        EVENTS
      </CustomNavLink>
      <CustomNavLink style={{ fontSize: "1rem" }} to="/login">
        LOGIN
      </CustomNavLink>
      <CustomNavLink style={{ fontSize: "1rem" }} to="/admin">
        ADMIN
      </CustomNavLink>
      <CustomNavLink style={{ fontSize: "1rem" }} to="/about">
        ABOUT
      </CustomNavLink>
      <div onClick={() => setTheme((prev) => !prev)}>
        <ThemeSwitcher id="themeSwitcher" />
      </div>
    </AppBar>
  )
}
const CustomNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.mode === "light" ? "#000" : theme.palette.contrast.reverse,
  fontSize: "1rem",
  fontWeight: "bold",
  fontFamily: "Poppins, great-font, sans-serif",
  cursor: "pointer",
  position: "relative",
  transition: "color 0.3s ease",
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: "1.7px",
    background: theme.palette.primary.main,
    transition: "width 0.3s cubic-bezier(0.165, 0.84, 0.44, 1.1)",
    transformOrigin: "center",
  },
  "&:hover": {
    "&::after": {
      width: "80%",
    },
  },

  // Responsive styling
  [theme.breakpoints.up("sm")]: {
    padding: ".3rem",
    fontSize: ".8rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: ".7rem",
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "1rem",
    fontSize: "1.1rem",
  },
}))

const ThemeSwitcher = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#3b0061" : "#ec5aff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#3b0061" : "#be33f5",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#ec5aff",
    borderRadius: 20 / 2,
  },
}))
