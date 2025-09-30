import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getUserAuth } from "./redux/user/user-action";
import { selectCurrentUser } from "./redux/user/user-selector";
import { selectThemeColor } from "./redux/theme/theme-selector";
import { themeChangeAction } from "./redux/theme/theme-action";
import { createStructuredSelector } from "reselect";

import LandingPage from "./pages/landing-page/landing-page.component";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./components/shop-component/shop.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import HeaderHome from "./components/header-home-component/header-home.component";
import SignUp from "./components/sign-up-component/sign-up.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import HistoryPage from "./components/history-component/history.component";

import "./App.css";

const App = () => {
  const structuredSelector = createStructuredSelector({
    currentUser: selectCurrentUser,
    theme: selectThemeColor,
  });
  const { currentUser, theme } = useSelector(structuredSelector);
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
    <div className="App" id={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <HeaderHome />
      <Routes>
        <Route
          path="/shopPage"
          element={currentUser ? <Homepage /> : <Navigate to="/signIn" />}
        />
        <Route
          path="/shop/*"
          element={currentUser ? <Shop /> : <Navigate to="/signIn" />}
        />
        <Route
          path="/signIn"
          element={currentUser ? <Navigate to="/shopPage" /> : <SignInSignUp />}
        />
        <Route
          path="/signUp"
          element={currentUser ? <Navigate to="/shopPage" /> : <SignUp />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
};

export default App;
