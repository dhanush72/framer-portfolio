import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  {
    to: "/",
    text: "1. About Us",
  },
  {
    to: "/work",
    text: "2. Our Work",
  },
  {
    to: "/contact",
    text: "3. Contact Us",
  },
];

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <Navs>
      <h1>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        {links.map(({ to, text }) => (
          <li key={to}>
            <StyledLink className={to === pathname ? "active" : ""} to={to}>
              {text}
            </StyledLink>
            <ActiveLine
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: to === pathname ? "30%" : "0%" }}
            />
          </li>
        ))}
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
  position: sticky;
  top: 0;
  z-index: 10;

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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0;
    height: 20vh;

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding-left: 0;
      }
    }
  }
`;

const ActiveLine = styled(motion.div)`
  height: 0.2rem;
  position: absolute;
  width: 0;
  bottom: -80%;
  left: 60%;
  background: #23d997;

  @media (max-width: 768px) {
    left: 0%;
  }
`;

const StyledLink = styled(Link)`
  &.active {
    color: #23d997;
  }
`;

export default Nav;
