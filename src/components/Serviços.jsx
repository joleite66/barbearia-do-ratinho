import React from "react";
import logo_barba from "../assets/logo_barba.jpg";
import logo_cabelo from "../assets/logo_cabelo.jpg";
import logo_cabelo_barba from "../assets/logo_cabelo_barba.jpg";

const Serviços = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={logo_barba}
            alt="logo_barba"
          />
          <h2 className="tex-2xl font-bold text-center py-8">
            Corte de cabelo
          </h2>
          <p className="text-center txt-4xl font-bold">
            {" "}
            Corte de cabelo feito por um dos nossos barbeiros
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">6€</p>
            <p className="py-2 border-b mx-8 "></p>
            <p className="py-2 border-b mx-8 "></p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={logo_cabelo}
            alt="logo_cabelo"
          />
          <h2 className="tex-2xl font-bold text-center py-8">
            Corte de cabelo
          </h2>
          <p className="text-center txt-4xl font-bold">
            {" "}
            Corte de cabelo feito por um dos nossos barbeiros
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">6€</p>
            <p className="py-2 border-b mx-8 "></p>
            <p className="py-2 border-b mx-8 "></p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={logo_cabelo_barba}
            alt="logo_cabelo_barba"
          />
          <h2 className="tex-2xl font-bold text-center py-8">
            Corte de cabelo
          </h2>
          <p className="text-center txt-4xl font-bold">
            {" "}
            Corte de cabelo feito por um dos nossos barbeiros
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">6€</p>
            <p className="py-2 border-b mx-8 "></p>
            <p className="py-2 border-b mx-8 "></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviços;
