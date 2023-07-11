import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Nearlyby from "./Pages/Nearlyby/Nearlyby";
import KingDealsPage from "./Pages/KingDeals/KingDealsPage";
import Profile from "./Pages/Profile/Profile";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/find-restaruent" element={<Nearlyby />} />
        <Route exact path="/kingdeals" element={<KingDealsPage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
