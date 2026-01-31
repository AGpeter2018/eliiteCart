import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectThemeColor } from "../../redux/theme/theme-selector";

import LogoCrown from "../../assets/crown-solid-full.svg";
import { auth, createUserProfile } from "../../firebase/firebase-utils";

import "./sign-up.style.scss";

const SignUp = () => {
  const structureSelector = createStructuredSelector({
    theme: selectThemeColor,
  });
  const { theme } = useSelector(structureSelector);

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
      setMessage({ type: 'error', text: 'Please confirm your password' })
      setTimeout(() => setMessage({ type: '', text: '' }), 2500)
      return;
    }

    try {
      setLoading(true)
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });

      setMessage({ type: 'success', text: 'Account created successfully' })
      setTimeout(() => setMessage({ type: '', text: '' }), 2500)

      setTimeout(async () => {
        await auth.signOut();
        navigate("/signin");
      }, 2500)

      setFormData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setMessage({ type: 'error', text: 'Error in creating user' })
      setTimeout(() => setMessage({ type: '', text: '' }), 2500)
    } finally {
      setLoading(false)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="sign-page" id={theme}>
      <div className="sign-container">
        <img src={LogoCrown} alt="EliteCart Logo" className="logo" />

        <div className="welcome-badge">Join EliteCart</div>

        <h2>Create Account</h2>
        <p className="subtitle">Sign up with your email and password</p>

        <form className="sign-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={displayName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="link-text">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>

      {message.text && (
        <div className={`alert alert-${message.type}`}>{message.text}</div>
      )}

      {loading && (
        <div className="spinner-overlay">
          <div className="spin-circle"></div>
          <div className="spinner-text">EliteCart...</div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
