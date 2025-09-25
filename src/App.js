import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page/landing-page.component";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./components/shop-component/shop.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import HeaderHome from "./components/header-home-component/header-home.component";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <HeaderHome />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignInSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
