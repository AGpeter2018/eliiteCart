import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectThemeColor } from "../../redux/theme/theme-selector";

import LogoCrown from "../../assets/crown-solid-full.svg";
import { auth, signInWithGoogle } from "../../firebase/firebase-utils";

import "./sign-in.style.scss";

const SignIn = () => {
  const structuredSelector = createStructuredSelector({
    theme: selectThemeColor,
  });
  const { theme } = useSelector(structuredSelector);

  const [message, setMessage] = useState({
    type: '',
    text: ''
  })
  const [loading, setLoading] = useState(false)
  const [signData, setSignData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = signData

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      await auth.signInWithEmailAndPassword(email, password);
      setLoading(false)
      setSignData({ email: "", password: "" });
      setMessage({ type: 'success', text: 'Signed in successfully!' })
      setTimeout(() => setMessage({ type: '', text: '' }), 2500)
    } catch (error) {
      setMessage({ type: 'error', text: 'Error in signing in' })
      setTimeout(() => setMessage({ type: '', text: '' }), 2500)
    } finally {
      setLoading(false)
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSignData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="sign-page" id={theme}>
      <div className="sign-container">
        <img src={LogoCrown} alt="EliteCart Logo" className="logo" />

        <div className="welcome-badge">Welcome Back</div>

        <h2>Sign In</h2>
        <p className="subtitle">Sign in with your email and password</p>

        <form className="sign-form" onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

          <button
            type="button"
            className="btn-google"
            onClick={signInWithGoogle}
            disabled={loading}
          >
            Sign In with Google
          </button>
        </form>

        <p className="link-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
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
}

export default SignIn;
