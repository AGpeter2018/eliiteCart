import { React, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getUserAuth } from "./redux/user/user-action";

import LandingPage from "./pages/landing-page/landing-page.component";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./components/shop-component/shop.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import HeaderHome from "./components/header-home-component/header-home.component";
import SignUp from "./components/sign-up-component/sign-up.component";

import "./App.css";
const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribeFromAuth = dispatch(getUserAuth());
    return () => {
      if (unSubscribeFromAuth) {
        unSubscribeFromAuth();
      }
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <HeaderHome />
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
          element={currentUser ? <Navigate to="/homepage" /> : <SignInSignUp />}
        />
        <Route
          path="/signUp"
          element={currentUser ? <Navigate to="/homepage" /> : <SignUp />}
        />
      </Routes>
    </div>
  );
};

export default App;
