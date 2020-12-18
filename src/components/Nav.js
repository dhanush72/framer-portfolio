import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  const location = useLocation();
  return (
    <Navs>
      <h1>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        {links.map(({ to, text }) => (
          <li key={to}>
            <StyledLink
              className={to === location.pathname ? "active" : ""}
              to={to}
            >
              {text}
            </StyledLink>
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

const StyledLink = styled(Link)`
  &.active {
    color: #23d997;
  }
`;

export default Nav;
