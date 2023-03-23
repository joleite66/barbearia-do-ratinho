import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid-cols-3 py-5 px-20 flex gap-8 text-gray-300 ">
      <div className=" justify-between my-4">
        <h1 className="text-3xl font-bold text-[#00df9a]">
          Barbearia do Ratinho
        </h1>
      </div>
      <div className="flex justify-between my-5">
        <a href="https://facebook.com/barbearia-do-ratinho">
          <FaFacebookSquare size={30} />
        </a>
        <a href="https://facebook.com/barbearia-do-ratinho">
          <FaInstagram size={30} />
        </a>
      </div>
      <div className="flex justify-right my-6">
        <p className="text-right">
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
  );
};
//            <span className="text-[#00df9a] hover:font-bold ">Política de privacidade</span>

export default Footer;
