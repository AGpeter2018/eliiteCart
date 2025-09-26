import React from "react";

import LogoCrown from "../../assets/crown-solid-full.svg";
import CustomInput from "../custom-input-component/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfile } from "../../firebase/firebase-utils";

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Please confirm your password");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (event) => {
    event.preventDefault();
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
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
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
