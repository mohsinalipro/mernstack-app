import React from "react";
import { connect } from "react-redux";
import Header from "../common/Header";
import PageContainer from "../common/PageConainer";
import Container from "../common/Container";

import requireAuth from "../common/requireAuth";

function HomePage() {
  return (
    <div>
      <Header />
      <PageContainer>
        <Container>Home Page</Container>
      </PageContainer>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(requireAuth(HomePage));
