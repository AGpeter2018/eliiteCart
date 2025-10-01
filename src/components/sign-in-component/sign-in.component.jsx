import React from "react";
import { Link } from "react-router-dom";

import LogoCrown from "../../assets/crown-solid-full.svg";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input-component/custom-input.component";

import { auth, signInWithGoogle } from "../../firebase/firebase-utils";

import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-container">
        <img src={LogoCrown} alt="" className="logo" />
        <div className="greeting">
          <h1>Welcome Back</h1>
        </div>
        <h2>I already have account</h2>
        <h3>Sign in with email and password</h3>
        <div className="form-container">
          <form action="" className="sign-in-form" onSubmit={this.handleSubmit}>
            <div className="inputA">
              <CustomInput
                type="text"
                name="email"
                value={email}
                label="Email"
                handleChange={this.handleChange}
                required
              />
            </div>
            <div className="inputB">
              <CustomInput
                type="password"
                name="password"
                value={password}
                label="Password"
                handleChange={this.handleChange}
                required
              />
            </div>
            <CustomButton type="submit" signIn>
              Sign In
            </CustomButton>
            <CustomButton type="submit" isGoogle onClick={signInWithGoogle}>
              Sign with Google
            </CustomButton>
          </form>
          <div className="link">
            Not having an account yet ? <Link to="/signUp">sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
