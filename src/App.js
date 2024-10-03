import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import store from "./Store";
import Details from "./components/Details/Details";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;


