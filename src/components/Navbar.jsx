import React, { useState } from "react";
import { FaBars, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleUser = () =>{
      if (isLogin) {
        setIsLogin(true)
      }
      else{
        navigate('/login')
      }
    }
    
  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];
  return (
    <header className="max-w-screen-2xl xl:px-18 md:px-20 px-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <a href="/" className="">
          <img className="w-40" src={logo} alt="" />
        </a>

        

              {/* nav items */}
      <div className="text-xs">
        <ul className="lg:flex items-center gap-2 hidden">
          {navItems.map(({ title, path}) => (
            <li key={title} className="hover:underline font-semibold px-1 py-1 rounded">
              <NavLink
                to={path}
                className={({ isActive}) => isActive ? "active" : ""}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

        {/* account and shopping btn */}
        <div className="text-lg text-Black flex items-center gap-4">
          <a href="/" className="flex items-center gap-2 container">
            <FaShoppingBag className="w-5 h-5"/>
          </a>
          <a onClick={toggleUser} className="flex items-center gap-2 ">
            <FaUser className="w-5 h-5"/>
          </a>
        </div>

        <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu}>
                {
                    isMenuOpen ? <FaTimes className="w-5 h-5 text-black"/> : <FaBars className="w-5 h-5 text-black"/>
                }
            </button>
        </div>
      </nav>
      <hr />


      {/* mobile menu items */}
      <div>
        <ul className={`bg-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
          {navItems.map(({ title, path }) => (
            <li key={title} className=" hover:text-white hover:bg-gray-600 my-3 text-center cursor-pointer border border-black rounded py-1">
              <Link
                to={path}
                onClick={toggleMenu}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      
    </header>
  );
};

export default Navbar;
