import React from "react";
import Header from "../common/Header";
import PageConainer from "../common/PageConainer";
import Container from "../common/Container";

function HomePage() {
  return (
    <div>
      <Header />
      <PageConainer>
        <Container>Home Page</Container>
      </PageConainer>
    </div>
  );
}

export default HomePage;
