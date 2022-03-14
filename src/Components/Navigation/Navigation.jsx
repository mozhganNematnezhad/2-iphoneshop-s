import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

import "./Navigation.css";
import { ConsumeState } from "../../Context/CartContext/CartItemsState";
import { ConsumeAuthState } from "../../Context/AuthContext/AuthState";

import { Dropdown } from "react-bootstrap";

const Navigation = () => {
  const { cart } = ConsumeState();
  // console.log(myobject);

  const userData = ConsumeAuthState();
  console.log("AuthNavi", userData);

  // Auth
  // همین کاربر ماست این
  // {_id: '622c2d38bc52dd43c4d0ba22', name: 'mozhgan',
  //  phoneNumber: '09112457762',
  //  email: 'ne.mozhgan@gmail.com',
  // isAdmin: false,
  // email: "ne.mozhgan@gmail.com"
  // isAdmin: false
  // name: "mozhgan"
  // phoneNumber: "09112457762"
  // token

  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li className="navItem">
            <NavLink
              to="/"
              className={(navData) => {
                if (navData.isActive) {
                  return "activeLink";
                } else {
                  return "";
                }
              }}
            >
              Home
            </NavLink>
          </li>

          <li className="btn border-0">
            <NavLink to="/cart">
              <FiShoppingCart className="cart" />

              {cart.cartItems.length > 0 ? (
                <span className="cartNumber">
                  {cart.cartItems.filter((p) => p.qty > 0).length}
                </span>
              ) : (
                <span className="cartNumber0">0</span>
              )}
            </NavLink>
          </li>

          <li className="account">
            <NavLink
              // to="/login"
              to={userData.Auth.name ? "/" : "/login"}
            >
              {userData.Auth.name ? (
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {userData.Auth.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link to="/">
                      <Dropdown.Item href="#/action-1">
                        خروج از حساب کاربری
                      </Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <AiOutlineUser />
              )}
            </NavLink>
          </li>
        </ul>
        <div>
          <h3 className="brand">Shoping Online</h3>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

{
  /* {cart.cartItems.length > 0 && (
                <span className="cartNumber">
                  {cart.cartItems.filter((p) => p.qty > 0).length}{" "}
                </span>
              )} */
}
