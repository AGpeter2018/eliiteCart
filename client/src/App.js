import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getUserAuth } from "./redux/user/user-action";
import { selectCurrentUser } from "./redux/user/user-selector";
import { selectThemeColor } from "./redux/theme/theme-selector";
import { themeChangeAction } from "./redux/theme/theme-action";
import { createStructuredSelector } from "reselect";

import LandingPage from "./pages/landing-page/landing-page.component";
import HeaderHome from "./components/header-home-component/header-home.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary";

import "./App.css";

const Homepage = lazy(() => import('./pages/homepage/homepage.component'))
const Shop = lazy(() => import('./components/shop-component/shop.component'))
const SignInSignUp = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up.component'))
const SignUp = lazy(() => import('./components/sign-up-component/sign-up.component'))
const CheckoutPage = lazy(() => import('./pages/checkout-page/checkout-page.component'))
const HistoryPage = lazy(() => import('./components/history-component/history.component'))

const App = () => {
  const navigate = useNavigate()
  const structuredSelector = createStructuredSelector({
    currentUser: selectCurrentUser,
    theme: selectThemeColor
  });
  const { currentUser, theme } = useSelector(structuredSelector);
  console.log(currentUser)
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
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/shopPage"
              element={
                <>
                  <HeaderHome />
                  {currentUser ? <Homepage /> : <Navigate to="/signin" />}
                </>
              }
            />
            <Route
              path="/shop/*"
              element={
                <>
                  <HeaderHome />
                  {currentUser ? <Shop /> : <Navigate to="/signin" />}
                </>
              }
            />
            <Route
              path="/signin"
              element={
                <>
                  <HeaderHome />
                  {currentUser ? <Navigate to="/shopPage" /> : <SignInSignUp />}
                </>
              }
            />
            <Route path="/signup" element={<SignUp />} />
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
                  {currentUser ? <HistoryPage /> : <Navigate to="/signin" />}
                </>
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
