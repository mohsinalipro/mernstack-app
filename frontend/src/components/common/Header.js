import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";

const Navigation = styled.div`
  background: red;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  display: inline-block;
  margin-right: 10px;
  padding: 2 4px;
`;

const NavLinkStyled = styled(NavLink)`
  display: block;
  text-decoration: none;
`;

const LogoTitle = styled.span``;

export default function Header() {
  return (
    <div>
      <Container>
        <LogoTitle>MERN Stack App</LogoTitle>
      </Container>
      <Navigation>
        <Container>
          <Ul>
            <Li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </Li>
            <Li>
              <NavLinkStyled to="/login">Login</NavLinkStyled>
            </Li>
            <Li>
              <NavLinkStyled to="/signup">Signup</NavLinkStyled>
            </Li>
          </Ul>
        </Container>
      </Navigation>
    </div>
  );
}
