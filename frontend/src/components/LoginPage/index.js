import React from "react";
import LoginForm from "./LoginForm";
import Header from "../common/Header";
import PageConainer from "../common/PageConainer";
import Container from "../common/Container";
import guestOnly from "../common/guestOnly";

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

export default guestOnly(LoginPage);
