import React from "react";
import LoginForm from "./LoginForm";
import Header from "../common/Header";
import PageConainer from "../common/PageConainer";
import Container from "../common/Container";
import requireAuth from "../common/requireAuth";

function LoginPage() {
  return (
    <div>
      <Header />
      <PageConainer>
        <Container>
          <LoginForm />
        </Container>
      </PageConainer>
    </div>
  );
}

export default requireAuth(LoginPage, true);
