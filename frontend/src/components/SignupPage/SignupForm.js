import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Shake from "react-reveal/Shake";

import { connect } from "react-redux";
import signupAction from "../../redux/actions/user/signup";

import Form, {
  FormRow,
  Label,
  Input,
  Button,
  FormTitle,
  FormTip
} from "../common/Form";
import config from "../../config";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    validName: false,
    validEmail: false,
    validUsername: false,
    validPassword: false,
    validConfirmPassword: false,
    valid: false,
    formSubmitted: false
  };

  validateName = () => {
    const { name } = this.state;
    this.setState({ validName: name.length >= 3 }, this.validateForm);
  };

  validateEmail = () => {
    const { email } = this.state;
    this.setState({ validEmail: email.length >= 3 }, this.validateForm);
  };

  validateUsername = () => {
    const { username } = this.state;
    this.setState({ validUsername: username.length >= 3 }, this.validateForm);
  };

  validatePassword = () => {
    const { password } = this.state;
    this.setState({ validPassword: password.length >= 8 }, this.validateForm);
  };

  validateConfirmPassword = () => {
    const { confirmPassword, password } = this.state;

    this.setState(
      {
        validConfirmPassword:
          confirmPassword.length >= 8 && confirmPassword === password
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      valid:
        this.state.name &&
        this.state.email &&
        this.state.validUsername &&
        this.state.validPassword &&
        this.state.confirmPassword
    });
  };

  handleNameChange = e => {
    const { value } = e.target;
    this.setState({ name: value }, this.validateName);
  };
  handleEmailChange = e => {
    const { value } = e.target;
    this.setState({ email: value }, this.validateEmail);
  };
  handleUsernameChange = e => {
    const { value } = e.target;
    this.setState({ username: value }, this.validateUsername);
  };
  handlePasswordChange = e => {
    const { value } = e.target;
    this.setState({ password: value }, this.validatePassword);
  };
  handleConfirmPasswordChange = e => {
    const { value } = e.target;
    this.setState({ confirmPassword: value }, this.validateConfirmPassword);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({ formSubmitted: false }, () =>
      this.setState({ formSubmitted: true })
    );
    if (this.state.valid) {
      this.props.signupAction(
        this.state.name,
        this.state.email,
        this.state.username,
        this.state.password
      );
    }
  };

  render() {
    return (
      <div>
        <Fade onSubmit={this.handleFormSubmit}>
          <Form onSubmit={this.handleFormSubmit}>
            <FormTitle>Signup in to {config.appName}</FormTitle>

            <FormRow>
              <Label htmlFor="name">
                <Shake when={this.state.formSubmitted && !this.state.validName}>
                  Name
                </Shake>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={this.handleNameChange}
                placeholder="Enter your name"
                value={this.state.name}
              />
            </FormRow>
            <Fade
              collapse
              when={this.state.formSubmitted && !this.state.validName}
            >
              <FormTip error>Name must be atleast 3 characters long</FormTip>
              <br />
            </Fade>

            <FormRow>
              <Label htmlFor="email">
                <Shake
                  when={this.state.formSubmitted && !this.state.validEmail}
                >
                  Email
                </Shake>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                onChange={this.handleEmailChange}
                placeholder="Enter your email"
                value={this.state.email}
              />
            </FormRow>
            <Fade
              collapse
              when={this.state.formSubmitted && !this.state.validEmail}
            >
              <FormTip error>Email must be valid</FormTip>
              <br />
            </Fade>

            <FormRow>
              <Label htmlFor="username">
                <Shake
                  when={this.state.formSubmitted && !this.state.validUsername}
                >
                  Username
                </Shake>
              </Label>
              <Input
                type="text"
                onChange={this.handleUsernameChange}
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

            <FormRow>
              <Label htmlFor="confirmPassword">
                <Shake
                  when={
                    this.state.formSubmitted && !this.state.validConfirmPassword
                  }
                >
                  Confirm Password
                </Shake>
              </Label>
              <Input
                type="password"
                onChange={this.handleConfirmPasswordChange}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Enter your confirm password"
                value={this.state.confirmPassword}
              />
            </FormRow>
            <Fade
              collapse
              when={
                this.state.formSubmitted && !this.state.validConfirmPassword
              }
            >
              <FormTip error>
                Confirm password must be valid and matched with entered password
              </FormTip>
              <br />
            </Fade>

            <Button>Signup</Button>

            <FormTip textAlign={"center"}>
              Already have an account at {config.appName}?{" "}
              <strong>
                <Link to="/login">Login</Link>
              </strong>
            </FormTip>
          </Form>
        </Fade>
      </div>
    );
  }
}

export default connect(
  null,
  { signupAction }
)(SignupForm);
