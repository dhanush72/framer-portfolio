import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutDiv = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    padding: 2rem;
  }

  button {
    margin-top: 2rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0;

    button {
      margin: 2rem;
    }
  }
`;

export const ImageDiv = styled.div`
  flex: 1;
  padding-left: 5rem;
  z-index: 2;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
