import React from "react";
import home1 from "../assets/images/home1.png";
import { AboutDiv, Description, Hide, ImageDiv } from "../styles";

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

export default About;
