import React, { Component } from "react";
import { connect } from "react-redux";
import retriveInfoAction from "../../redux/actions/user/retriveInfo";
import Header from "../common/Header";
import PageContainer from "../common/PageConainer";
import Container from "../common/Container";

import requireAuth from "../common/requireAuth";

class HomePage extends Component {
  componentWillMount() {
    this.props.retriveInfoAction();
  }
  render() {
    const { id, name, email, username } = this.props.user;
    return (
      <div>
        <Header />
        <PageContainer>
          <Container>
            <div>{name ? <h1>Welcome {name}!</h1> : "Loading"}</div>
            <br />
            {id && (
              <div>
                <h3>Your account information:</h3>
                <p>Email Address: {email}</p>
                <p>Username: {username}</p>
                <p>User ID: {id}</p>
              </div>
            )}
          </Container>
        </PageContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(
  mapStateToProps,
  { retriveInfoAction }
)(requireAuth(HomePage));
