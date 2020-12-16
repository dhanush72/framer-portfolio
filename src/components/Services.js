import React from "react";
import styled from "styled-components";
import home2 from "../assets/images/home2.png";
import clock from "../assets/images/clock.svg";
import diaphragm from "../assets/images/diaphragm.svg";
import money from "../assets/images/money.svg";
import teamwork from "../assets/images/teamwork.svg";

const Services = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>High</h2> <span>quality</span> services
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Effecient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              fugit?
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              fugit?
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Money</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              fugit?
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              fugit?
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="home2" />
      </div>
    </div>
  );
};

export default Services;
