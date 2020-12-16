import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Navs>
      <h1>
        <a href="/">Capture</a>
      </h1>
      <ul>
        <li>
          <a href="/">1. About Us</a>
        </li>

        <li>
          <a href="/">2. Our Work</a>
        </li>

        <li>
          <a href="/">3. Contact Us</a>
        </li>
      </ul>
    </Navs>
  );
};

const Navs = styled.nav`
  height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5.2rem;
  background: #282828;

  a {
    color: #fff;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 5rem;
    position: relative;
  }
`;

export default Nav;
