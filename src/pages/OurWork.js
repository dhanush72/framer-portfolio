import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../assets/images/athlete-small.png";
import racer from "../assets/images/theracer-small.png";
import goodtimes from "../assets/images/goodtimes-small.png";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imgAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie variants={fade} initial="hidden" animate={controls} ref={element}>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Hide>
          <Link to="/work/the-athlete">
            <motion.img variants={imgAnim} src={athlete} alt="athlete" />
          </Link>
        </Hide>
      </Movie>

      <Movie
        variants={fade}
        animate={controls2}
        initial="hidden"
        ref={element2}
      >
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Hide>
          <Link to="/work/the-racer">
            <motion.img variants={imgAnim} src={racer} alt="racer" />
          </Link>
        </Hide>
      </Movie>

      <Movie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Hide>
          <Link to="/work/good-times">
            <motion.img variants={imgAnim} src={goodtimes} alt="goodtimes" />
          </Link>
        </Hide>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem;

  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame2)`
  background: #83d2ff;
`;

const Frame4 = styled(Frame3)`
  background: #82ffa0;
`;

export default OurWork;
