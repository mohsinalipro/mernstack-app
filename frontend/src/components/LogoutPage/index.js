import React, { Component } from "react";
import { connect } from "react-redux";
import logoutAction from "../../redux/actions/user/logout";
import Header from "../common/Header";
import PageConainer from "../common/PageConainer";
import Container from "../common/Container";
import requireAuth from "../common/requireAuth";

class LogoutPage extends Component {
  componentDidMount() {
    this.props.logoutAction();
  }
  componentDidUpdate() {
    console.log("LOGOUT UPDATED");
  }
  render() {
    return (
      <div>
        <Header />
        <PageConainer>
          <Container>
            <div>Logout Successfully</div>
          </Container>
        </PageConainer>
      </div>
    );
  }
}

export default requireAuth(
  connect(
    null,
    { logoutAction }
  )(LogoutPage)
);
