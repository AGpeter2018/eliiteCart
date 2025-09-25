import React from "react";

import LogoCrown from "../../assets/crown-solid-full.svg";
import CustomInput from "../custom-input-component/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signUp-container">
        <img src={LogoCrown} alt="logo" className="logo" />
        <h2 className="title">I do not have an account</h2>
        <h3>Sign up with your email and password</h3>
        <form className="sign-up-form" onSubmit={() => this.handleChange}>
          <CustomInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            handleChange={this.handleChange}
            required
            lenthy
          />
          <CustomInput
            type="email"
            name="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            required
            lenthy
          />
          <CustomInput
            type="password"
            name="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
            lenthy
          />
          <CustomInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
            required
            lenthy
          />
          <div className="body">
            <CustomButton signUp type="submit">
              Sign Up
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
