import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { useState } from "react"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import { MotionConfigContext, motion } from "framer-motion"
export default function Login() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <motion.div
      className="jjjjjjjjjjjjjjjjjjjjj"
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        className="hhhhhhhhhhhhhhhhhh"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <form
          className="iiiiiiiiiiiiiiiiiiiii"
          style={{
            height: window.innerWidth > 600 ? "85vh" : window.innerWidth > 400 ? "80vh" : "50vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: window.innerWidth > 400 ? "80px" : "10px",
          }}
        >
          <Paper
            elevation={15}
            sx={{
              width: { xs: "90%", sm: "70%", md: "55%", lg: "40%", xl: "35%" },
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              alignItems: "center",
              px: "14px",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  borderBottom: 1,
                  borderColor: "divider",
                  borderWidth: "1px",
                }}
              >
                <Tabs value={value} onChange={handleChange} aria-label="form">
                  <Tab
                    label="Sign in"
                    {...a11yProps(0)}
                    sx={{ mx: { xs: "15px", sm: "25px", md: "35px", lg: "45px", xl: "55px" } }}
                  />
                  <Tab
                    label="Sign up"
                    {...a11yProps(1)}
                    sx={{ mx: { xs: "15px", sm: "25px", md: "35px", lg: "45px", xl: "55px" } }}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <SignIn setValue={setValue} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <SignUp setValue={setValue} />
              </CustomTabPanel>
            </Box>
          </Paper>
        </form>
      </Box>
    </motion.div>
  )
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      style={{
        height: "90%",
        width: "100%",
      }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3, width: "100%", height: "100%" }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}
