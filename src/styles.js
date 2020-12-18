import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutDiv = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 5rem;
  align-items: center;
  overflow: hidden;

  button {
    margin-top: 2rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  z-index: 2;
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
`;

export const Hide = styled.div`
  overflow: hidden;
`;
