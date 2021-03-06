import React from "react";
import SignupForm from "./SignupForm";
import Header from "../common/Header";
import PageConainer from "../common/PageConainer";
import Container from "../common/Container";
import guestOnly from "../common/guestOnly";

function SignupPage() {
  return (
    <div>
      <Header />
      <PageConainer>
        <Container>
          <SignupForm />
        </Container>
      </PageConainer>
    </div>
  );
}

export default guestOnly(SignupPage);
