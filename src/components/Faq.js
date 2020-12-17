import React from "react";
import styled from "styled-components";
import { AboutDiv } from "../styles";
import Toggle from "./Toggle";

const Faq = () => {
  return (
    <FaqDiv>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <Toggle title="How do i start?">
        <div className="answer">
          <h5>Lorem ipsum dolor sit amet consectetur.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            adipisci dolorem eaque!
          </p>
        </div>
      </Toggle>
      <Toggle title="Different Payment Methods">
        <div className="answer">
          <h5>Lorem ipsum dolor sit amet consectetur.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            adipisci dolorem eaque!
          </p>
        </div>
      </Toggle>
      <Toggle title="What product do you?">
        <div className="answer">
          <h5>Lorem ipsum dolor sit amet consectetur.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            adipisci dolorem eaque!
          </p>
        </div>
      </Toggle>
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
