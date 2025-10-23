import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import LogoCrown from "../../assets/crown-solid-full.svg";
import CustomInput from "../custom-input-component/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfile } from "../../firebase/firebase-utils";

import { selectThemeColor } from "../../redux/theme/theme-selector";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./sign-up.style.scss";

const SignUp = () => {
  const structureSelector = createStructuredSelector({
    theme: selectThemeColor,
  });
  const { theme } = useSelector(structureSelector);

  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

  const [message, setMessage] = useState({
    type: '',
    text: '',
  })

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = formData;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage({type:'error', text:'Plesase, confirm your password'})
      setTimeout(() => setMessage({type: '', text: ''}),2500)
      return;
    }

    try {
      setLoading(true)
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });

      setMessage({type: 'success', text:  'Account created successfully'})

      setTimeout(() => setMessage({type: '', text: ''}), 2500)

      setTimeout(async () => {
        // ✅ log out after signup so they must log in
        await auth.signOut();
        // ✅ redirect to Sign In page
        navigate("/signIn");    
      },2500)

      // reset form
      setFormData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setMessage({type: 'error', text: 'Error in creating user'})
      setTimeout(() => setMessage({type: '', text: ''}), 2500)
    } finally{
      setLoading(false)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="signUp-container" id={theme}>
      <img src={LogoCrown} alt="logo" className="logo" />
      <h2 className="title">I do not have an account</h2>
      <h3>Sign up with your email and password</h3>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          handleChange={handleChange}
          required
        />
        <CustomInput
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <CustomInput
          type="password"
          name="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <CustomInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          handleChange={handleChange}
          required
        />
        <div className="body">
          <CustomButton signUp type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Sign Up'}
            
          </CustomButton>
          <div className="link" id={theme}>
            Having an account ? <Link to="/signIn">sign in</Link>
          </div>
        </div>
      </form>
      {message.text && (
        <div className={`alert ${message.type}`}>{message.text}</div>
      )}

      {loading && (
         <div className="spinner">
          <div className="spin"></div>
          <div className="text-spin">EliteCart...</div>
        </div>
      )}
    </div>
  );
};


export default SignUp;
