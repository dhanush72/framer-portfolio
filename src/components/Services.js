import React from "react";
import home2 from "../assets/images/home2.png";
import clock from "../assets/images/clock.svg";
import diaphragm from "../assets/images/diaphragm.svg";
import money from "../assets/images/money.svg";
import teamwork from "../assets/images/teamwork.svg";
import { AboutDiv, Description, ImageDiv } from "../styles";
import styled from "styled-components";

const Services = () => {
  return (
    <ServicesDiv>
      <Description>
        <h2>
          High <span>quality</span> services{" "}
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Effecient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
        </Cards>
      </Description>
      <ImageDiv>
        <img src={home2} alt="home2" />
      </ImageDiv>
    </ServicesDiv>
  );
};

const ServicesDiv = styled(AboutDiv)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      border-radius: 6px;
      padding: 0.6rem;
      background: #fff;
      color: #303952;
    }
  }
`;

export default Services;
