import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {navItems }from "../data/navData";

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

            <Link to="/">
              <img src="../assets/img/logo.jpg" alt="Logo" className="h-16" />
            </Link>
         

         
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

          
          <div className="flex items-center gap-4"> 
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-600 hover:text-blue-600"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

    
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white px-4">
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
