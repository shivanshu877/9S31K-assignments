import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div>
        <a class="vbCXhM _2ggUbX" href="#">
          <img
            alt="Menu"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1IDI0IiBmaWxsPSJub25lIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExNzg3Xzg3NzY3KSI+CjxwYXRoIGQ9Ik00LjUgMTJIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDYuMjVIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDE3Ljc1SDIwLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTc4N184Nzc2NyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
            width="24"
            height="24"
          />{" "}
        </a>
      </div>

      <div class="_16ZfEv">
        <a class="YLCOuy" href="#" aria-label="Flipkart" title="Flipkart">
          <picture title="Flipkart" />
          <source
            srcset="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            media="(min-width:767px)"
          />
          <source
            srcset="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg"
            media="(max-width:766px)"
          />
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            width="160"
            height="40"
            title="Flipkart"
          />
        </a>
      </div>

      <div className="search">
        <form class="_2rslOn header-form-search" action="/search" method="GET">
          <div class="">
            <div class="search-bar">
              <input
                class="Pke_EE"
                type="text"
                title="Search for Products, Brands and More"
                name="q"
                autocomplete="off"
                placeholder="Search for Products, Brands and More"
                value=""
              />
            </div>
          </div>
          <ul class="_1sFryS _2x2Mmc"></ul>
        </form>
      </div>
      <div className="header-last">
        <div className="cart">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"></img>
        </div>
        <div className="shop">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"></img>
        </div>
        <div className="more">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
