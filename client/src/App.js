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
    theme: selectThemeColor
  });
  const { currentUser, theme} = useSelector(structuredSelector);
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
      <Routes>
        <Route
          path="/shopPage"
          element={
            <>
              <HeaderHome />
              {currentUser ? <Homepage /> : <Navigate to="/signIn" />}
            </>
          }
        />
        <Route
          path="/shop/*"
          element={
            <>
              <HeaderHome />
              {currentUser ? <Shop /> : <Navigate to="/signIn" />}
            </>
          }
        />
        <Route
          path="/signIn"
          element={
            <>
              <HeaderHome />
              {currentUser ? <Navigate to="/shopPage" /> : <SignInSignUp />}
            </>
          }
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/checkout"
          element={
            <>
              <HeaderHome />
              {<CheckoutPage />}
            </>
          }
        />
        <Route
          path="/history"
          element={
            <>
              <HeaderHome />
              {currentUser ? <HistoryPage /> : <Navigate to="/signIn" />}
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
