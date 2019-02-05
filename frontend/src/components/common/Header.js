import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";

const HeaderStyled = styled.div`
  margin-bottom: 20px;
`;
const Nav = styled.nav`
  background: #fafbfc;
  border-bottom: 1px solid #e1e4e8;
`;

const Ul = styled.ul`
  list-style: none;
  padding-top: 8px;
`;

const Li = styled.li`
  display: inline-block;
  margin-right: 10px;
  padding: 2 4px;
`;

const NavLinkStyled = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #777;
  padding: 10px;
  text-transform: uppercase;
  margin-right: 16px;
  position: relative;
  border-bottom: 2px solid transparent;
  &:hover {
    color: #24292e;
    border-bottom-color: #e1e4e8;
  }
  &.active {
    color: #24292e;
    border-bottom-color: #24292e;
  }
`;

const LogoWapper = styled.div`
  background: #24292e;
  padding: 24px 0 24px;
`;
const NavLinkLogo = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 24px;
  color: #fff !important;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <LogoWapper>
        <Container>
          <NavLinkLogo to="/">MERN Stack App</NavLinkLogo>
        </Container>
      </LogoWapper>
      <Nav>
        <Container>
          <Ul>
            <Li>
              <NavLinkStyled exact to="/">
                Home
              </NavLinkStyled>
            </Li>
            <Li>
              <NavLinkStyled to="/login">Login</NavLinkStyled>
            </Li>
            <Li>
              <NavLinkStyled to="/signup">Signup</NavLinkStyled>
            </Li>
          </Ul>
        </Container>
      </Nav>
    </HeaderStyled>
  );
}
