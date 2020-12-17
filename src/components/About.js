import React from "react";
import home1 from "../assets/images/home1.png";
import { AboutDiv, Description, Hide, ImageDiv } from "../styles";
import { motion } from "framer-motion";

const About = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 0.75 } },
  };

  const btn = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <AboutDiv>
      <Description>
        <motion.div
          variants={container}
          animate="show"
          initial="hidden"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.button variants={btn} animate="show" initial="hidden">
          Contact us
        </motion.button>
      </Description>
      <ImageDiv>
        <img src={home1} alt="home1" />
      </ImageDiv>
    </AboutDiv>
  );
};

export default About;
