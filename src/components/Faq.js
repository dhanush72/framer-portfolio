import React from "react";
import styled from "styled-components";
import { AboutDiv } from "../styles";

const Faq = () => {
  return (
    <FaqDiv>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do i start?</h4>
        <div className="answer">
          <p>title</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            adipisci dolorem eaque!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>title</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            adipisci dolorem eaque!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What product do you?</h4>
        <div className="answer">
          <p>title</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            adipisci dolorem eaque!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </FaqDiv>
  );
};

const FaqDiv = styled(AboutDiv)`
  display: block;

  span {
    display: block;
  }

  h4 {
    font-size: 2rem;
  }

  h2 {
    padding-bottom: 2rem;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 1rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;

export default Faq;
