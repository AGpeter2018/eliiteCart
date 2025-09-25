import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/landing-page/landing-page.component";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./components/shop-component/shop.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import HeaderHome from "./components/header-home-component/header-home.component";
import SignUp from "./components/sign-up-component/sign-up.component";

import { auth, createUserProfile } from "./firebase/firebase-utils";

import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <HeaderHome currentUser={currentUser} />
        <Routes>
          <Route
            path="/homepage"
            element={currentUser ? <Homepage /> : <Navigate to="/signIn" />}
          />
          <Route
            path="/shop"
            element={currentUser ? <Shop /> : <Navigate to="/signIn" />}
          />
          <Route
            path="/signIn"
            element={
              currentUser ? <Navigate to="/homepage" /> : <SignInSignUp />
            }
          />
          <Route
            path="/signUp"
            element={currentUser ? <Navigate to="/homepage" /> : <SignUp />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
