import React from "react";
import home1 from "../assets/images/home1.png";
import styled from "styled-components";

const About = () => {
  return (
    <AboutDiv>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
        <button>Contact us</button>
      </Description>
      <ImageDiv>
        <img src={home1} alt="home1" />
      </ImageDiv>
    </AboutDiv>
  );
};

// styles
const AboutDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
`;

const ImageDiv = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default About;
