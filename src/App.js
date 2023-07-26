import Header from "./components/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Nearlyby from "./Pages/Nearlyby/Nearlyby";
import KingDealsPage from "./Pages/KingDeals/KingDealsPage";
import Profile from "./Pages/Profile/Profile";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./components/Login/Login";
import React from "react";
import ReactDOM from "react-dom/client";
import MobileProfilePage from "./components/MobileProfilePage/MobileProfilePage";

function App({ hideHeaderPaths = [] }) {
  const { pathname } = useLocation();
  console.log(pathname, "Pathname");
  return (
    <div className="App">
      {!hideHeaderPaths.includes(pathname) && <Header />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/find-restaruent" element={<Nearlyby />} />
        <Route exact path="/kingdeals" element={<KingDealsPage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/mobileprofile" element={<MobileProfilePage />} />

      </Routes>
    </div>
  );
}

export default App;
