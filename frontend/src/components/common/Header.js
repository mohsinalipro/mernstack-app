import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import Container from "./Container";
import config from "../../config";
const HeaderStyled = styled.header`
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
  padding: 8px;
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
  padding: 12px 0 12px;
`;
const Logo = styled.h1`
  & a {
    text-decoration: none;
    color: #fff;
    font-weight: 400;
  }
`;

const Author = styled.div`
  color: #999;
  font-size: 12px;
  text-align: right;
  & a {
    color: inherit;
  }
`;

function Header(props) {
  return (
    <HeaderStyled>
      <LogoWapper>
        <Container>
          <React.Fragment>
            <Logo>
              <NavLink to="/">{config.appName}</NavLink>
            </Logo>
            <Author>
              developed by: {""}
              <a href={config.authorUrl}>{config.author}</a>
            </Author>
          </React.Fragment>
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
            {props.user.token ? (
              <Li>
                <NavLinkStyled to="/logout">Logout</NavLinkStyled>
              </Li>
            ) : (
              <React.Fragment>
                <Li>
                  <NavLinkStyled to="/login">Login</NavLinkStyled>
                </Li>
                <Li>
                  <NavLinkStyled to="/signup">Signup</NavLinkStyled>
                </Li>
              </React.Fragment>
            )}
          </Ul>
        </Container>
      </Nav>
    </HeaderStyled>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(Header);
