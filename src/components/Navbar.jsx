import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import {navItems }from "../data/navData";// Assuming you have a file with nav items

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchShow(!searchShow);
  };

  

  return (
    <div className="w-full">

      <nav className="bg-white shadow relative z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className="bg-gradient-to-r from-indigo-600 to-indigo-400 px-6 py-2"
            style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
          >
            <Link to="/">
              <img src="../assets/img/logo.png" alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item, i) => (
              <li key={i} className="relative group">
                { (
                  <Link to={item.link} className="hover:text-blue-600 text-xl">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4"> 
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-600 hover:text-blue-600"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white px-4 pb-4">
            <ul className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link to={item.link} className="block py-2 border-b">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
