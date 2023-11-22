import { Box, Button, TextField, Typography } from "@mui/material"

export default function AdminSignIn() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Typography
        color="primary.main"
        fontWeight="bolder"
        sx={{ fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem", lg: "2.8rem" } }}
      >
        Admin
      </Typography>
      <Box
        sx={{
          height: "40%",
          width: { xs: "80%", sm: "70%", md: "60%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <TextField
          id="email"
          autoComplete="true"
          fullWidth
          variant="filled"
          label="email"
          autoFocus
        />
        <TextField id="password" autoComplete="true" fullWidth variant="filled" label="password" />
      </Box>
      <Box
        sx={{
          width: { xs: "80%", sm: "70%", md: "60%" },
        }}
      >
        <Button variant="contained" fullWidth>
          Sign in as admin
        </Button>
      </Box>
      <Box display="flex" gap="5px"></Box>
    </Box>
  )
}
