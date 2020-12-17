import React from "react";
import home1 from "../assets/images/home1.png";
import { AboutDiv, Description, Hide, ImageDiv } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, imgAnim } from "../animation";

const About = () => {
  return (
    <AboutDiv>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.button variants={fade} initial="hidden" animate="show">
          Contact us
        </motion.button>
      </Description>
      <ImageDiv>
        <motion.img variants={imgAnim} src={home1} alt="home1" />
      </ImageDiv>
    </AboutDiv>
  );
};

export default About;
