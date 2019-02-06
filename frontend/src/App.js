import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import styled from "styled-components";
import ReduxToastr from "react-redux-toastr";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import LogoutPage from "./components/LogoutPage";

import store from "./redux";

const AppStyled = styled.div`
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStyled>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/logout" component={LogoutPage} />
            </Switch>
          </BrowserRouter>
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
        </AppStyled>
      </Provider>
    );
  }
}

export default App;
