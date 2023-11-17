import LogoImage from "../assets/Images/Home.png"
import background from "../assets/Images/Background.jpg"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Box, Container, Typography } from "@mui/material"
import "../styles/index.css"

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animationVariants = {
    hidden: { opacity: 0, translateX: -200 },
    visible: { opacity: 1, translateX: 0 },
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [imageHeight, setImageHeight] = useState(windowWidth < 600 ? "50vh" : "75vh")
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setImageHeight(window.innerWidth < 600 ? "50vh" : "75vh")
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
      <Box height="100vh" sx={{ position: "relative", overflowX: "hidden" }}>
        <img
          src={background}
          alt="IEE Members Image"
          style={{
            width: "100%",
            height: imageHeight,
            filter: "blur(3px)",
            userSelect: "none",
            position: "absolute",
            WebkitMaskImage: "linear-gradient(to Top, transparent 0%, black 100%)",
            transform: "translateY(-50%)",
            top: bgPosition + "px",
          }}
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={LogoImage}
          alt="IEE Image"
          style={{
            width: "clamp(300px,100%,750px)",
            filter: "blur(0px)",
            userSelect: "none",
            margin: " 100px auto",
            display: "block",
            position: "absolute",
            zIndex: 1,
            top: logoPosition + "px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <Container
          sx={{
            px: " 0px !important",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: { xs: "25vh", sm: "35vh" },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
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
              style={{ fontSize: "inherit" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              Welcome IEEE Members
            </motion.div>
          </Typography>
        </Container>
      </Box>
      <Container sx={{ marginTop: "-400px" }}>
        <br />
        <br />
        <Typography
          sx={{
            fontSize: { xs: ".9rem", sm: "1rem", md: "1.3rem", lg: "1.3rem" },
            fontWeight: "bold",
          }}
        >
          <AnimatedTextBlock>💡 What We Offer:</AnimatedTextBlock>
        </Typography>
        <Typography sx={{ fontSize: { lg: ".95rem" }, m: "14px", pl: "10px" }}>
          <AnimatedTextBlock>
            Knowledge Sharing: Dive into a pool of collective wisdom through workshops, seminars,
            and knowledge-sharing sessions. Projects and Innovation: Get hands-on experience with
            cutting-edge projects and explore your creativity in the realm of technology. Networking
            Opportunities: Connect with like-minded individuals, industry professionals, and experts
            in the field.
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />
        <Typography
          sx={{
            fontSize: { xs: ".9rem", sm: "1rem", md: "1.3rem", lg: "1.3rem" },
            fontWeight: "bold",
          }}
        >
          <AnimatedTextBlock>📅 Event Management Site:</AnimatedTextBlock>
        </Typography>
        <Typography sx={{ fontSize: { lg: ".95rem" }, m: "14px", pl: "10px" }}>
          <AnimatedTextBlock>
            Explore our Event Management Site, your gateway to a world of exciting happenings and
            opportunities. Here, you'll find:
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />
        <Typography
          sx={{
            fontSize: { xs: ".9rem", sm: "1rem", md: "1.3rem", lg: "1.3rem" },
            fontWeight: "bold",
          }}
        >
          <AnimatedTextBlock>🎉 Upcoming Events:</AnimatedTextBlock>
        </Typography>
        <Typography sx={{ fontSize: { lg: ".95rem" }, m: "14px", pl: "10px" }}>
          <AnimatedTextBlock>
            Stay in the loop with our calendar of events, ranging from technical talks to hackathons
            and social gatherings.
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />
        <Typography
          sx={{
            fontSize: { xs: ".9rem", sm: "1rem", md: "1.3rem", lg: "1.3rem" },
            fontWeight: "bold",
          }}
        >
          <AnimatedTextBlock>🔗 Registration Hub:</AnimatedTextBlock>
        </Typography>
        <Typography sx={{ fontSize: { lg: ".95rem" }, m: "14px", pl: "10px" }}>
          <AnimatedTextBlock>
            Easily register for events, workshops, and activities to make sure you never miss out on
            an enriching experience.
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />
        <Typography
          sx={{
            fontSize: { xs: ".9rem", sm: "1rem", md: "1.3rem", lg: "1.3rem" },
            fontWeight: "bold",
          }}
        >
          <AnimatedTextBlock>📚 Resource Center:</AnimatedTextBlock>
        </Typography>
        <Typography sx={{ fontSize: { lg: ".95rem" }, m: "14px", pl: "10px" }}>
          <AnimatedTextBlock>
            Access resources, materials, and documentation related to past events, ensuring you have
            a wealth of knowledge at your fingertips.
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />

        <Typography sx={{ fontSize: { lg: ".95rem" }, m: "14px", pl: "10px" }}>
          <AnimatedTextBlock>
            Embark on a journey of discovery, collaboration, and innovation with IEEE ISET Nabeul.
            We're excited to have you on board!
          </AnimatedTextBlock>
        </Typography>
        <br />
        <br />
        <Typography sx={{ fontSize: { lg: ".95rem" }, m: "14px", pl: "10px" }}>
          <AnimatedTextBlock>#Explore Now #Join Us #Learn More</AnimatedTextBlock>
        </Typography>
        <br />
        <br />
      </Container>
    </>
  )
}
function AnimatedTextBlock({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animationVariants = {
    hidden: { opacity: 0, translateX: -200 },
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
