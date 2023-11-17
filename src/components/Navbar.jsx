import styled from "@emotion/styled"
import { AppBar, Button, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router"

export default function Navbar({ setTheme }) {
  const navigate = useNavigate()

  return (
    <AppBar
      sx={{
        bgcolor: "transparent",
        display: "flex",
        position: "sticky",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backdropFilter: "blur(15px)",
      }}
    >
      <CustomNavLink style={{ fontSize: ".9rem" }} to="/">
        HOME
      </CustomNavLink>
      <CustomNavLink style={{ fontSize: ".9rem" }} to="/events">
        EVENTS
      </CustomNavLink>
      <CustomNavLink style={{ fontSize: "1rem" }} to="/admin">
        ADMIN
      </CustomNavLink>
      <CustomNavLink style={{ fontSize: "1rem" }} to="/about">
        ABOUT
      </CustomNavLink>
      <Button variant="contained" sx={{ backgroundColor: "#000" }} onClick={() => setTheme((prev) => !prev)}>
        Theme
      </Button>
    </AppBar>
  )
}
const CustomNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.contrast.reverse,
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
