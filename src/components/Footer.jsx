import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-5 px-20 flex gap-8 text-gray-300 ">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-[#00df9a]">
          Barbearia do Ratinho
        </h1>
        <div className="flex place-content-evenly md:w-[75%] my-6">
          <a href="https://facebook.com/barbearia-do-ratinho">
            <FaFacebookSquare size={30} />
          </a>
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="">
        <div className="flex  my-6">
          <p className="text-center">
            <strong>
              © 2023 BARBEARIA DO RATINHO • WEBSITE MAGIC BY{" "}
              <a
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
