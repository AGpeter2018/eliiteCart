import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page/landing-page.component";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./components/shop-component/shop.component";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
