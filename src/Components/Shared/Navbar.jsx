import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
    const [open, close] =useState(false);
  const links = [
    <li key="home">
      <a href="/">Home</a>
    </li>,

    <li key="login">
      <a href="/login">Login</a>
    </li>,
    <li key="register">
      <a href="/registration">Register</a>
    </li>,
    <li key="Informaion">
      <a href="/informaion">Train Information</a>
    </li>,

    <li key="contact">
      <a href="/contact">Contact Us</a>
    </li>,
  ];

  // bg-gradient-to-r from-[#DD000000] to-[#fffffffa]

  return (
    <div className="navbar bg-base-100  max-w-7xl mx-auto">
      <div className="navbar-start relative">
        <a href="/" className="flex items-center cursor-pointer  text-xl">
          <img
            src="https://eticket.railway.gov.bd/assets/img/home/bangladesh-railway.png"
            alt="logo"
            className="w-16 h-16"
          />
          <span>
            Bangladesh <br /> Railway
          </span>
        </a>
      </div>

      <div className="navbar-end ">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{links}</ul>
        <div className="lg:hidden">
            {
                open? (
                    <IoCloseSharp onClick={() => close(!open)} className="text-2xl text-[#00A96E]"/>
                ) : (
                    <FaBars onClick={() => close(!open)} className="text-2xl text-[#00A96E]"/>
                )
            }
     { open?<div className="absolute left-0 top-20  transition-all duration-500 ease-in-out ">
          <ul className=" w-screen  h-[50vh] bg-[#00A96E] text-white p-10 space-y-5">{links}</ul>
        </div>:""}
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
