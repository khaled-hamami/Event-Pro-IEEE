import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import EventIcon from "@mui/icons-material/Event"
import InfoIcon from "@mui/icons-material/Info"
import LoginIcon from "@mui/icons-material/Login"
import { ThemeSwitcher } from "./Navbar"
import { useLocation, useNavigate } from "react-router"
export default function MobileNav({ setTheme }) {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname)
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent ",
        display: { sm: "none" },
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels={!window.onscroll}
        sx={{
          display: "flex",
          jutifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "inherit",
          backdropFilter: "blur(15px)",
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate("/")}
          label="Home"
          icon={<HomeIcon fontSize="medium" sx={{ color: location.pathname === "/" ? "primary.main" : "" }} />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/events")}
          label="Events"
          icon={<EventIcon fontSize="medium" sx={{ color: location.pathname === "/events" ? "primary.main" : "" }} />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/login")}
          label="Login"
          icon={<LoginIcon fontSize="medium" sx={{ color: location.pathname === "/login" ? "primary.main" : "" }} />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/about")}
          label="About"
          icon={<InfoIcon fontSize="medium" sx={{ color: location.pathname === "/about" ? "primary.main" : "" }} />}
        />
        <ThemeSwitcher onClick={() => setTheme((prev) => !prev)} />
      </BottomNavigation>
    </Paper>
  )
}
