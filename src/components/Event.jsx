import { Alert, Box, Button, Chip, IconButton, Snackbar, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import { useTheme } from "@emotion/react"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import { FavoriteOutlined } from "@mui/icons-material"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

const user = { id: 4 }
export default function Event({ event }) {
  const [locationVisible, setLocationVisible] = useState(false)
  const [liked, setLiked] = useState(false)
  const theme = useTheme()
  const [RegisteredPopup, setRegisteredPopup] = useState(false)
  const [ableToRegister, setAbleToRegister] = useState(true)

  //* to handle the likes  logic on page load
  useEffect(() => {
    event?.likes.includes(user.id) ? setLiked(true) : setLiked(false)
  }, [event.likes])

  //* to handle the register logic on page load
  useEffect(() => {
    event?.registered.length >= event?.maxRegestree ? setAbleToRegister(false) : null
  }, [event.registered])

  //*handle regestration
  const Register = () => {
    if (event?.registered.length >= event.maxRegestree) {
    }
    setRegisteredPopup(true)
  }

  //* to handle like
  const like = () => {
    if (!event?.likes.includes(user.id)) {
      event.likes.push(user.id)
      setLiked(true)
    } else {
      event.likes = event.likes.filter((id) => id !== user.id)
      setLiked(false)
    }
  }

  //* handle the image location and price slide close button
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setRegisteredPopup(false)
  }
  //*  handle image switch
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const switchImage = (increment) => {
    const newIndex = (currentImageIndex + increment + event.images.length) % event.images.length
    setCurrentImageIndex(newIndex)
  }

  return (
    <Box
      sx={{
        width: { xs: "80vw", sm: "70vw", lg: "35vw" },
        height: { xs: "auto", sm: "500px", md: "600px" },
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        backgroundColor: theme.palette.mode === "light" ? "#f3f3f3" : "rgb(4 0 32)",
        border: theme.palette.mode === "dark" ? "1px solid #111" : "none",
        m: { xs: "20px", sm: "40px", md: "60px" },
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <Box
        onMouseEnter={() => setLocationVisible(true)}
        onMouseOut={() => setLocationVisible(false)}
        sx={{
          position: "relative",
          width: "100%",
          height: "50%",
          minHeight: "174px",
          borderRadius: "4px 4px 0px 0px",
          backgroundImage: `url(${event.images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {event.images.length > 1 && (
          <>
            <IconButton
              size="large"
              onClick={() => switchImage(-1)}
              sx={{
                alignSelf: "center",
                color: "primary.main",
                backgroundColor: "rgba(255,255,255,.5)",
                "&:hover": { backgroundColor: "rgba(255,255,255,.7)" },
                mx: "10px",
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton
              size="large"
              onClick={() => switchImage(1)}
              sx={{
                alignSelf: "center",
                color: "primary.main",
                backgroundColor: "rgba(255,255,255,.5)",
                "&:hover": { backgroundColor: "rgba(255,255,255,.7)" },
                mx: "10px",
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          </>
        )}
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,.5)",
            width: "100%",
            height: "15%",
            position: "absolute",
            bottom: locationVisible ? "0" : "-15%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "bottom 0.3s ease",
            px: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ cursor: "auto" }}>
              <LocationOnOutlinedIcon sx={{ color: "#fff" }} />
            </IconButton>
            <Typography>{event?.location || "unavaliable"}</Typography>
          </div>
          <Typography>{event?.price + (event?.price > 0 ? " d" : "") || "unavaliable"}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: { xs: "7px", sm: "10px", md: "15px" },
        }}
      >
        <Typography
          variant="body1"
          component="span"
          sx={{
            color: "contrast.reverse",
            fontSize: { xs: ".7rem", sm: ".95rem" },
            textShadow: "none !important",
            mr: "10px",
          }}
        >
          {event?.date?.toLocaleString("default", { month: "long" }) +
            " " +
            event?.date?.getDate() +
            " " +
            event?.date?.getFullYear() || "unavaliable"}
        </Typography>
        <Typography
          component="span"
          sx={{ color: "#666", fontSize: { xs: ".95rem" }, textShadow: "none !important" }}
        >
          |
        </Typography>

        <Typography
          variant="body1"
          component="span"
          sx={{
            color: "contrast.reverse",
            fontSize: { xs: ".7rem", sm: ".95rem" },
            textShadow: "none !important",
            ml: "10px",
          }}
        >
          {event?.time.startHour + " to " + event?.time.endHour || "unavaliable"}
        </Typography>
        <Typography
          component="span"
          sx={{ color: "#666", fontSize: { xs: ".95rem" }, textShadow: "none !important" }}
        >
          |
        </Typography>

        <Typography
          component="span"
          sx={{
            color: "contrast.reverse",
            fontSize: { xs: ".7rem", sm: ".95rem" },
            textShadow: "none !important",
          }}
        >
          {event?.open || "unavaliable"}
        </Typography>
      </Box>
      <Box sx={{ p: { xs: "7px", sm: "10px", md: "15px" } }}>
        <Typography
          sx={{
            color: "contrast.reverse",
            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
            fontWeight: "bold",
          }}
        >
          {event?.title || "unavaliable"}
        </Typography>
      </Box>
      <Box sx={{ p: { xs: "7px", sm: "10px", md: "15px" } }}>
        <Typography
          sx={{
            color: "#808080",
            fontSize: { xs: ".8rem", sm: "1rem" },
          }}
        >
          {event?.description || "unavaliable"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          p: { xs: "7px", sm: "10px", md: "15px" },
        }}
      >
        <Typography
          sx={{
            color: "#808080",
            fontSize: { xs: ".7rem", sm: "1rem" },
          }}
        >
          trainers :
        </Typography>
        {event.trainers.map((trainer) => (
          <Chip
            size="medium"
            key={trainer}
            sx={{
              color: "contrast.reverse",
              fontSize: { xs: ".6rem", sm: "1rem" },
              display: "flex",
              width: "fit-content",
            }}
            label={`${trainer || "unavaliable"}`}
          />
        ))}
      </Box>
      <Box display="flex" justifyContent="flex-end" px="20px">
        <IconButton
          id={event?.id}
          aria-label="share"
          onClick={() => like()}
          title="like"
          sx={{
            color: liked ? "primary.main" : "rgba(120,120,120,.4)",
          }}
        >
          <FavoriteOutlined />
        </IconButton>
        <IconButton aria-label="share" color="primary" title="share">
          <ShareOutlinedIcon />
        </IconButton>
        <Button
          onClick={Register}
          disabled={!ableToRegister || event.closed}
          title="register"
          sx={{ fontSize: { xs: ".8rem", sm: ".9rem" } }}
        >
          {!ableToRegister ? "Max Reached" : event.closed ? "closed" : "register"}
        </Button>
        {RegisteredPopup && (
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
              Registered successfully
            </Alert>
          </Snackbar>
        )}
      </Box>
    </Box>
  )
}
