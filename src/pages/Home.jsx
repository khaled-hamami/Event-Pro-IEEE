import LogoImage from "../assets/Images/Home.webp"
import background from "../assets/Images/background.webp"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Box, Container, Typography } from "@mui/material"
import "../styles/index.css"
import { useTheme } from "@emotion/react"
import { useNavigate } from "react-router"

export default function Home() {
  const theme = useTheme()
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [imageHeight, setImageHeight] = useState(windowWidth < 600 ? "50svh" : "75svh")
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setImageHeight(window.innerWidth < 600 ? "50svh" : "75svh")
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const [scrollY, setScrollY] = useState(0)
  const [bgPosition, setBgPosition] = useState(0)
  const [logoPosition, setLogoPosition] = useState(0)
  const [TextPosition, setTextPosition] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  useEffect(() => {
    setBgPosition(-scrollY / 8)
    setLogoPosition(-scrollY / 1)
    setTextPosition(-scrollY / 2)
  }, [scrollY])
  return (
    <>
      {/* /****************************************************** SECTION 1 ******************************************************** */}

      <Box height="55svh" sx={{ position: "relative" }}>
        <img
          src={background}
          alt="IEE Members Image"
          style={{
            width: "100%",
            height: imageHeight,
            filter: "blur(3px)",
            userSelect: "none",
            position: "absolute",
            overflowX: "hidden",
            WebkitMaskImage: "linear-gradient(to Top, transparent 0%, black 100%)",
            transform: "translateY(-50%)",
            top: bgPosition + "px",
          }}
        />
        <motion.img
          initial={{ opacity: 0, translateY: "-200" }}
          animate={{ opacity: 1, translateY: "0" }}
          transition={{ duration: 1 }}
          src={LogoImage}
          alt="IEE Image"
          style={{
            width: "clamp(300px,100%,750px)",
            userSelect: "none",
            margin: " 100px auto",
            display: "block",
            position: "absolute",
            zIndex: 1,
            top: logoPosition + "px",
            left: "50%",
            translateX: "-50%",
            filter: theme.palette.mode == "dark" ? "brightness(1.5)" : "",
          }}
        />
        <Container
          sx={{
            px: " 0px !important",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: { xs: "25svh", sm: "35svh" },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            component="div"
            textAlign="center"
            variant="h3"
            fontWeight="bold"
            sx={{
              position: "relative",
              transform: "translateY(-50%)",
              top: TextPosition + "px",
            }}
          >
            <motion.div
              style={{
                fontSize: "inherit",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              Welcome IEEE Members
            </motion.div>
          </Typography>
        </Container>
      </Box>

      {/* /****************************************************** SECTION 2 ******************************************************** */}

      <Container sx={{}}>
        <br />
        <br />
        <Typography
          component="div"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1rem", md: "1.3rem", lg: "1.7rem" },
            letterSpacing: "-0.8px",
            fontWeight: "bold",
          }}
        >
          <AnimatedTextBlock animationside="right">💡 What We Offer:</AnimatedTextBlock>
        </Typography>
        <Typography
          component="div"
          sx={{
            color: "contrast.reverse",
            fontSize: { lg: "1.1rem" },
            m: "14px",
            pl: "10px",
          }}
        >
          <AnimatedTextBlock animationside="right">
            Discover a seamless event experience with our platform, where you can easily register
            for upcoming events, access event dates, fees and locations ... all in one place,
            ensuring a hassle-free and organized event participation.
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />
        <Typography
          component="div"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1rem", md: "1.3rem", lg: "1.7rem" },
            letterSpacing: "-0.8px",
            fontWeight: "bold",
            cursor: "pointer",
            "&:hover": { scale: "1.01", textDecoration: "underline" },
          }}
          onClick={() => navigate("/events")}
        >
          <AnimatedTextBlock animationside="left">📅 Event Management Site:</AnimatedTextBlock>
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: { lg: "1.1rem" },
            m: "14px",
            color: "contrast.reverse",
            pl: "10px",
          }}
        >
          <AnimatedTextBlock animationside="left">
            Explore our Event Management Site, your gateway to a world of exciting happenings and
            opportunities. Here, you'll find:
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />

        <Typography
          component="div"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1rem", md: "1.3rem", lg: "1.7rem" },
            letterSpacing: "-0.8px",
            fontWeight: "bold",
            cursor: "pointer",
            "&:hover": { scale: "1.01", textDecoration: "underline" },
          }}
          onClick={() => navigate("/events")}
        >
          <AnimatedTextBlock animationside="left">🔗 Registration Hub:</AnimatedTextBlock>
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: { lg: "1.1rem" },
            m: "14px",
            color: "contrast.reverse",
            pl: "10px",
          }}
        >
          <AnimatedTextBlock animationside="left">
            Easily register for events, workshops, and activities to make sure you never miss out on
            an enriching experience.
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />
        <Typography
          component="div"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1rem", md: "1.3rem", lg: "1.7rem" },
            letterSpacing: "-0.8px",
            fontWeight: "bold",
            cursor: "pointer",
            "&:hover": { scale: "1.01", textDecoration: "underline" },
          }}
          onClick={() => navigate("/events")}
        >
          <AnimatedTextBlock animationside="right">📚 Resource Center:</AnimatedTextBlock>
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: { lg: "1.1rem" },
            m: "14px",
            color: "contrast.reverse",
            pl: "10px",
          }}
        >
          <AnimatedTextBlock animationside="right">
            Access resources, materials, and documentation related to past events, ensuring you have
            a wealth of knowledge at your fingertips.
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />

        <Typography
          component="div"
          sx={{
            fontSize: { lg: "1.1rem" },
            m: "14px",
            pl: "10px",
          }}
        >
          <AnimatedTextBlock animationside="left">
            Embark on a journey of discovery, collaboration, and innovation with IEEE ISET Nabeul.
            We're excited to have you on board!
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />
        <Typography
          component="div"
          sx={{
            fontSize: { lg: "1.1rem" },
            m: "14px",
            pl: "10px",
          }}
        >
          <AnimatedTextBlock animationside="right">
            #Explore Now #Join Us #Learn More
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />
      </Container>
    </>
  )
}
function AnimatedTextBlock({ children, animationside }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  })

  const animationVariants = {
    hidden: { opacity: 0, translateX: animationside == "right" ? 300 : -300 },
    visible: { opacity: 1, translateX: 0 },
  }

  return (
    <motion.div
      ref={ref}
      style={{ fontSize: "inherit" }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
