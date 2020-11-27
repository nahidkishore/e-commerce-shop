import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import store from "./Store";
import Details from "./components/Details/Details";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar></Navbar>

        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/cart">
          <Cart></Cart>
        </Route>
        <Route exact path="/details/:id">
          <Details></Details>
        </Route>
      </Provider>
    </Router>
  );
}

export default App;
