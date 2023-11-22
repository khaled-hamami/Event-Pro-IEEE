import { Box, Button, TextField, Typography } from "@mui/material"

export default function SignUp({ setValue }) {
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
        Sign Up
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
        <TextField id="name" autoComplete="true" fullWidth variant="filled" label="name" autoFocus />
        <TextField
          id="email"
          autoComplete="true"
          fullWidth
          variant="filled"
          label="email"
         
        />
        <TextField id="password" autoComplete="true" fullWidth variant="filled" label="password" />
      </Box>
      <Box
        sx={{
          width: { xs: "80%", sm: "70%", md: "60%" },
          color: "primary.main",
        }}
      >
        <Button variant="contained" fullWidth>
          Sign Up
        </Button>
      </Box>
      <Box display="flex" gap="5px">
        <Typography color="contrast.reverse">
          Already have an account ? &nbsp;&nbsp;&nbsp;
          <Typography
            component="span"
            onClick={() => setValue(0)}
            sx={{
              color: "primary.main",
              cursor: "pointer",
              "&:hover": { color: "primary.dark", textDecoration: "underline" },
            }}
          >
            Sign in
          </Typography>
        </Typography>
      </Box>
      <Box display="flex" gap="5px"></Box>
    </Box>
  )
}
