import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router"

export default function SignIn({ setValue }) {
  const navigate = useNavigate()
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
        sx={{ fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem", lg: "2.8rem" }, my: "15px" }}
      >
        Sign in
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
        <FormControlLabel
          name="remember me"
          labelPlacement="start"
          label="Remember me"
          control={<Checkbox defaultChecked color="primary" />}
          sx={{ alignSelf: "self-start", m: "0" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "80%", sm: "70%", md: "60%" },
        }}
      >
        <Button variant="contained" fullWidth sx={{my:'15px'}}>
          Sign In
        </Button>
      </Box>
      <Box display="flex" gap="5px">
        <Typography color="contrast.reverse">
          Dont have an account yet ? &nbsp;&nbsp;&nbsp;
          <Typography
            component="span"
            onClick={() => setValue(1)}
            sx={{
              color: "primary.main",
              cursor: "pointer",
              "&:hover": { color: "primary.dark", textDecoration: "underline" },
            }}
          >
            Sign up
          </Typography>
        </Typography>
      </Box>
      <Box display="flex" gap="5px">
        <Typography
          color="primary.main"
          onClick={() => alert("Apologies , this is feature still in developement")}
          sx={{
            color: "primary.main",
            cursor: "pointer",
            "&:hover": { color: "primary.dark", textDecoration: "underline" },
            my: "15px",
          }}
        >
          Mot de passe oublié ?
        </Typography>
      </Box>
      <Button variant="outlined" sx={{ px: "40px", mb: "15px" }} onClick={() => navigate("/admin")}>
        Admin
      </Button>
    </Box>
  )
}
