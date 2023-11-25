import Event from "../components/Event"
import firstImage from "../assets/Images/1.jpg"
import secondImage from "../assets/Images/2.jpg"
import thirdImage from "../assets/Images/3.jpg"
import fourthImage from "../assets/Images/4.jpg"
import fithImage from "../assets/Images/5.jpg"
import sixthImage from "../assets/Images/6.jpg"
import { motion } from "framer-motion"
import { Box, Fab } from "@mui/material"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import AddIcon from "@mui/icons-material/Add"

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [ref, outerComponentInView] = useInView({
    triggerOnce: false,
  })

  const AnimatedEventBlock = ({ children, index }) => {
    const [innerRef, inView] = useInView({
      triggerOnce: false,
    })

    const animationVariants = {
      hidden: { opacity: 0, translateX: index % 2 === 0 ? -200 : 200 },
      visible: { opacity: 1, translateX: 0 },
    }

    return (
      <motion.div
        ref={innerRef}
        style={{ fontSize: "inherit", overflow: "hidden" }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    )
  }

  const event = [
    {
      id: 78549065465,
      name: "firstImage",
      title: "inegration day",
      description: "this is the first thing we do each year to get to know each other",
      trainers: ["khaled", "mohamed", "amin"],
      images: [firstImage, fithImage],
      date: new Date(Date.now()),
      time: { startHour: "7:00", endHour: "10:30" },
      location: "mrezgua",
      price: "free",
      open: "internal",
      likes: [4, 7, 8, 9, 5, 58, 96, 785, 415, 78, 522, 14, 89],
      registered: [5, 7, 8, 6, 9, 8, 4],
      maxRegestree: 7,
      closed: true,
    },
    {
      id: 78655667891,
      name: "secondImage",
      title: "tasks management",
      description: " we must give each one his/her task",
      trainers: ["ahmed", "ali"],
      images: [secondImage],
      date: new Date(Date.now()),
      time: { startHour: "14:00", endHour: "18:00" },
      location: "nabeul",
      price: "75",
      open: "external",
      likes: [5, 58, 96, 785, 415, 78, 522, 14, 89],
      registered: [5, 7, 8],
      maxRegestree: 9,
      closed: true,
    },
    {
      id: 98655667891,
      name: "secondImage",
      title: "Renuion",
      description: "gather up to discust some things",
      trainers: ["houssem", "sahar"],
      images: [thirdImage],
      date: new Date(Date.now()),
      time: { startHour: "14:00", endHour: "18:00" },
      location: "nabeul",
      price: "75",
      open: "external",
      likes: [7, 8, 9, 5, 58, 96, 785, 415, 78, 522, 14, 89],
      registered: [5, 7, 8],
      maxRegestree: 14,
      closed: false,
    },
    {
      id: 65298542579,
      name: "thirdImage",
      title: "formation",
      description: "we have a formation about react",
      trainers: ["asma"],
      images: [fourthImage],
      date: new Date(Date.now()),
      time: { startHour: "18:00", endHour: "20:00" },
      location: "iset",
      price: "15",
      open: "internal",
      likes: [4, 7, 8, 9, 5, 58, 96, 785, 415, 78, 522, 14, 89],
      registered: [5, 78, 8, 96],
      maxRegestree: 7,
      closed: false,
    },
    {
      id: 35879852579,
      name: "thirdImage",
      title: "recruitment",
      description: "we have a formation about react",
      trainers: ["asma"],
      images: [fithImage],
      date: new Date(Date.now()),
      time: { startHour: "18:00", endHour: "20:00" },
      location: "library",
      price: "free",
      open: "internal",
      likes: [4, 7, 8, 9, 5, 58, 96, 785, 415, 78, 522, 14, 89],
      registered: [5, 78, 8, 96],
      maxRegestree: 7,
      closed: false,
    },
    {
      id: 21345312579,
      name: "thirdImage",
      title: "discussion",
      description: "we have a formation about react",
      trainers: ["naser", "amel"],
      images: [sixthImage, firstImage, thirdImage],
      date: new Date(Date.now()),
      time: { startHour: "18:00", endHour: "20:00" },
      location: "caffé",
      price: "5",
      open: "internal",
      likes: [4, 7, 8, 9, 5, 58, 96, 785, 415, 78, 522, 14, 89],
      registered: [5, 78, 8, 96],
      maxRegestree: 7,
      closed: false,
    },
  ]
  return (
    <>
      <Box
        ref={ref}
        sx={{
          color: "#fff",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          overflowX: "hidden",
          mt: "100px",
        }}
      >
        {event.map((e, i) => (
          <AnimatedEventBlock index={i} key={e.id}>
            <motion.div
              initial={{ opacity: 0, translateX: i % 2 === 0 ? -300 : 300 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <Event event={e} />
            </motion.div>
          </AnimatedEventBlock>
        ))}
      </Box>
      <Box
        sx={{
          "& > :not(style)": { m: { xs: 10, sm: 7, md: 5 } },
          position: "fixed",
          bottom: 0,
          right: 0,
        }}
      >
        <Fab
          id="addIconButton"
          aria-haspopup="true"
          color="primary"
          aria-label="add"
          title="Add Event"
        >
          <AddIcon />
        </Fab>
      </Box>
    </>
  )
}
