import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart-wrapper">
      <div className="cart-header">
        <div className="cart-header-left">
          <span className="flipkart-logo">Flipkart</span>
          <span className="explore-plus">
            Explore <span className="plus">Plus ✨</span>
          </span>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
          <button className="search-btn">🔍</button>
        </div>

        <button className="login-btn">Login</button>
      </div>

      {/* 🛒 Cart Content */}
      <div className="cart-body">
        <div className="cart-box">
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt="Cart Empty"
            className="cart-image"
          />
          <h2 className="cart-title">Missing Cart items?</h2>
          <p className="cart-subtitle">
            Login to see the items you added previously
          </p>
          <button className="cart-login">Login</button>
        </div>
      </div>

      {/* Footer */}
      <div className="cart-footer">
        <div className="footer-left">
          Policies: <a href="#">Returns Policy</a> | <a href="#">Terms of use</a> |{" "}
          <a href="#">Security</a> | <a href="#">Privacy</a> © 2007-2025 Flipkart.com
        </div>
        <div className="footer-right">
          Need help? Visit the <a href="#">Help Center</a> or{" "}
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
