import React from "react";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="image">
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENvxmB3Qtts1tblUezfZ6VZAYOpDoa_xcfkg1g9eDMd8GNtUXbAzglU_-QNXSYMOhfGg&usqp=CAU"
          alt=""
        />
      </span>
      <ul className="list">
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Home & Living </p>
        <p>Beauty</p>
        <p>Studio</p>
      </ul>
      <div className="search-container">
        <FaSearch />
        <input type="text" className="search" />
      </div>
      <div className="last">
        <IconContext.Provider value={{ color: "black", size: 30 }}>
          <CgProfile />
          <span>Profile</span>
          <CiHeart />
          <span>Wishlist</span>
          <IoBagCheckOutline />
          <span>Bag</span>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Navbar;
