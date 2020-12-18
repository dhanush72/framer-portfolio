import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim, pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <ContactDiv
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2>Get in Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send us a message</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send an email</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Call us</h2>
          </Social>
        </Hide>
      </div>
    </ContactDiv>
  );
};

const ContactDiv = styled(motion.div)`
  padding: 5rem;
  color: #fff;
`;

const Title = styled(motion.div)`
  margin-bottom: 4rem;
  color: #fff;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin: 2rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export default ContactUs;
