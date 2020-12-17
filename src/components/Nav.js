import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navs>
      <h1>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>

        <li>
          <Link to="/work">2. Our Work</Link>
        </li>

        <li>
          <Link to="/contact">3. Contact Us</Link>
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
