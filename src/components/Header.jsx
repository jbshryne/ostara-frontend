import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header className="main-header">
      <img
        src="/assets/logo.png"
        alt="Ostara Tree Crystals logo"
        height={80}
        style={{ marginRight: 30 }}
      />
      <a href="https://ostaratreecrystals.square.site/">
        <span>Shop</span>
      </a>
      <Link className="nav-item" to="/blog">
        <span>Blog</span>
      </Link>
      <Link className="nav-item" to="/about">
        <span>About Us</span>
      </Link>
    </header>
  );
};

export default Header;
