import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full flex justify-center">
        <img src={logo} alt="Barbearia do Ratinho" />
      </h1>
 
    </div>
  );
};

export default Navbar;



/*

     <ul className="hidden ">
        <li className="p-4">Home</li>
        <li className="p-4">Sobre</li>
        <li className="p-4">Localização</li>
        <li className="p-4">Marcações</li>
        <li className="p-4">Contacto</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <img src={logo} alt="Barbearia do Ratinho" />
        </div>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
*/
