import React from "react";
import Code from "../assets/images/code.svg";

const About = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <button>Contact us</button>
        <div className="image">
          <img src={Code} alt="Code" />
        </div>
      </div>
    </div>
  );
};

export default About;
