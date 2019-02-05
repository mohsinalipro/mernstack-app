import React from "react";
import LoginForm from "./LoginForm";
import Header from "../common/Header";
import PageConainer from "../common/PageConainer";
import Container from "../common/Container";

function LoginPage() {
  return (
    <div>
      <Header />
      <PageConainer>
        <Container>
          <div>Login Page</div>
          <LoginForm />
        </Container>
      </PageConainer>
    </div>
  );
}

export default LoginPage;
