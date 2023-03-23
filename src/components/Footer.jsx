import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div class="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 py-5 px-4 sm:px-20 gap-4 text-gray-300">
      <div class="flex justify-center items-center my-0 sm:my-0">
        <h1 class="text-3xl font-bold text-[#00df9a]">
        <img src={logo} alt="Barbearia do Ratinho" />
      </h1>
      </div>
      <div class="flex justify-center items-center my-2">
        <a href="https://facebook.com/barbearia-do-ratinho">
          <FaFacebookSquare class="text-5xl sm:text-5xl text-white  hover:text-[#00df9a]" />
        </a>
        <a href="https://facebook.com/barbearia-do-ratinho">
        <FaInstagram class="text-5xl sm:text-5xl text-white hover:text-[#00df9a]" />
        </a>
      </div>
      <div class="w-full lg:mb-0 lg:inline-flex">
  <div class="flex justify-center my-2 lg:justify-start">
    <p class="flex items-center whitespace-nowrap text-center text-xs">
          <strong>
            © 2023 BARBEARIA DO RATINHO • WEBSITE MAGIC BY{" "}
            <a
              className="text-[#00df9a] hover:font-bold "
              href="https://joleite66.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOÃO LEITE
            </a>
          </strong>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
