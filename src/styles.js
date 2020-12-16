import styled from "styled-components";

export const AboutDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 5rem;
  align-items: center;

  button {
    margin-top: 2rem;
  }
`;

export const Description = styled.div`
  flex: 1;
`;

export const ImageDiv = styled.div`
  flex: 1;
  padding-left: 5rem;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
