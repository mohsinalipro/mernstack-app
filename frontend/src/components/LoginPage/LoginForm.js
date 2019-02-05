import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Shake from "react-reveal/Shake";

import Form, {
  FormRow,
  Label,
  Input,
  Button,
  FormTitle,
  FormTip
} from "../common/Form";
import config from "../../config";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    validUsername: false,
    validPassword: false,
    valid: false,
    formSubmitted: false
  };

  validateUsername = () => {
    const { username } = this.state;
    this.setState({ validUsername: username.length >= 3 }, this.validateForm);
  };

  validatePassword = () => {
    const { password } = this.state;
    this.setState({ validPassword: password.length >= 8 }, this.validateForm);
  };

  validateForm = () => {
    this.setState({
      valid: this.state.validUsername && this.state.validPassword
    });
  };

  handleUsernameChange = e => {
    const { value } = e.target;
    this.setState({ username: value }, this.validateUsername);
  };
  handlePasswordChange = e => {
    const { value } = e.target;
    this.setState({ password: value }, this.validatePassword);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({ formSubmitted: false }, () =>
      this.setState({ formSubmitted: true })
    );
  };

  render() {
    return (
      <div>
        <Fade>
          <Form onSubmit={this.handleFormSubmit}>
            <FormTitle>Login in to {config.appName}</FormTitle>
            <FormRow>
              <Label htmlFor="username">
                <Shake
                  when={this.state.formSubmitted && !this.state.validUsername}
                >
                  Username
                </Shake>
              </Label>
              <Input
                onChange={this.handleUsernameChange}
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={this.state.username}
              />
            </FormRow>

            <Fade
              collapse
              when={this.state.formSubmitted && !this.state.validUsername}
            >
              <FormTip error>
                Username must be atleast 3 characters long
              </FormTip>
              <br />
            </Fade>

            <FormRow>
              <Label htmlFor="password">
                <Shake
                  when={this.state.formSubmitted && !this.state.validPassword}
                >
                  Password
                </Shake>
              </Label>
              <Input
                onChange={this.handlePasswordChange}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={this.state.password}
              />
            </FormRow>

            <Fade
              collapse
              when={this.state.formSubmitted && !this.state.validPassword}
            >
              <FormTip error>
                Password must be atleast 8 characters long
              </FormTip>
              <br />
            </Fade>

            <Button>Login</Button>

            <FormTip textAlign={"center"}>
              New to {config.appName}?{" "}
              <strong>
                <Link to="/signup">Signup</Link>
              </strong>
            </FormTip>
          </Form>
        </Fade>
      </div>
    );
  }
}

export default LoginForm;
