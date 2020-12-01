import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.webp";

import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.CartReducer);
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__container">
          <div className="nav_left">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav_right">
            <Link to="/cart">
              <div className="basket">
                <BsFillBagFill className="cart-icon" />
                <span>{totalQuantity}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
