import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"
import PropagateLoader from "react-spinners/PropagateLoader"

export default function Loader({ loading }) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PropagateLoader
        color={theme.palette.mode === "dark" ? "#0996f6" : "#00609C"}
        loading={loading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  )
}
