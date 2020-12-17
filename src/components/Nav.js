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

const StyledLink = styled(Link)`
  &.active {
    color: #23d997;
  }
`;

export default Nav;
