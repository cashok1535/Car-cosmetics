import { useState } from "react";
import logo from "../img/carcosmetics-logo.svg";

export const HeaderNavbar = () => {
  const [wishListCount, setWishListCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  return (
    <section className="header__navbar">
      <div className="header__navbar__top">
        <img src={logo} alt="" />
        <div className="button__categories">Categories</div>
        <input placeholder="search" />
        <button className="header__button">Sign in</button>
        <button className="header__button">
          Wishlist <div className="count__books">{wishListCount}</div>
        </button>
        <button className="header__button">
          My cart <div className="count__books">{orderCount}</div>
        </button>
      </div>
    </section>
  );
};
