import { Box, Paper } from "@mui/material"
import AdminSignIn from "../components/AdminSignIn"
import { motion } from "framer-motion"

export default function Admin() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          mt: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `${window.innerHeight - 150}px`,
          width: "100%",
        }}
      >
        <form
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={15}
            sx={{
              width: { xs: "90%", sm: "65%", md: "45%", lg: "40%", xl: "35%" },
              height: { xs: "70%", sm: "80%", md: "80%", lg: "90%", xl: "100%" },
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AdminSignIn />
          </Paper>
        </form>
      </Box>
    </motion.div>
  )
}
