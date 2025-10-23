import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogoCrown from "../../assets/crown-solid-full.svg";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input-component/custom-input.component";

import { auth, signInWithGoogle } from "../../firebase/firebase-utils";

import "./sign-in.style.scss";
import { type } from "@testing-library/user-event/dist/type";

const SignIn = () => {
  const [message, setMessage] = useState({
    type: '',
    text: ''
  })
  const [loading, setLoading] = useState(false)
  const [signData, setSignData] = useState( {
      email: "",
      password: "",
    })

    const {email, password} = signData
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = signData;
    try {
      setLoading(true)
      await auth.signInWithEmailAndPassword(email, password);
      setLoading(false)
      setSignData({ email: "", password: "" });
      setMessage({type: 'success', text: 'Signed in successfully!'})
      setTimeout(() => setMessage({type: '', text: ''}),2500)
    } catch (error) {
      setMessage({type: 'error', text: 'Error in signing in'})
      setTimeout(() => setMessage({type: '', text: ''}),2500)
    } finally{
      setLoading(false)
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setSignData((prev) => ({...prev, [name]: value }));
  };

    return (
      <div className="sign-container">
        <img src={LogoCrown} alt="" className="logo" />
        <div className="greeting">
          <h1>Welcome Back</h1>
        </div>
        <h2>I already have account</h2>
        <h3>Sign in with email and password</h3>
        <div className="form-container">
          <form action="" className="sign-in-form" onSubmit={handleSubmit}>
            <div className="inputA">
              <CustomInput
                type="text"
                name="email"
                value={email}
                label="Email"
                handleChange={handleChange}
                required
              />
            </div>
            <div className="inputB">
              <CustomInput
                type="password"
                name="password"
                value={password}
                label="Password"
                handleChange={handleChange}
                required
              />
            </div>
            <CustomButton type="submit" signIn>
              Sign In
            </CustomButton>
            <CustomButton type="submit" isGoogle onClick={signInWithGoogle} disabled={loading}>
              Sign In with Google
            </CustomButton>
          </form>
          <div className="link">
            Not having an account yet ? <Link to="/signUp">sign up</Link>
          </div>
        </div>
         {message.text && (
        <div className={`alert ${message.type}`}>{message.text}
        </div>
      )}

       {loading && (
         <div className="spinner">
          <div className="spin"></div>
          <div className="text-spin">EliteCart...</div>
        </div>
      )}
      </div>
    );
  }

export default SignIn;
