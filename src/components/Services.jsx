import Barba from "../assets/logo_barba.png";
import BarbaCabelo from "../assets/logo_cabelo_barba.png";
import Cabelo from "../assets/logo_cabelo.png";
import React from "react";

const onClickAlert = () => {
  alert("\n Funcionalidade brevemente disponivel \n \n Para marcações contactar   914 716 580");
}


const Services = () => {
  return (
    <div className="w-full py-16 px-4">
      <h1 className="md:text-7xl text-white sm:text-7xl text-6xl font-bold md:py-6 text-center">
        SERVIÇOS
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div className="w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-125 duration-300 hover:rounded">
          <img className="object-contain h-48 w-96 " src={Barba} alt="Barba" />
          <h2 className="text-2xl font-bold text-center py-8 ">Barba</h2>
          <p className="text-center text-4xl font-bold">5€</p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:text-red-600 hover:scale-125 duration-300 hover:rounded" onClick={onClickAlert}>
            Efetuar Marcação
          </button>
        </div>
        <div className="w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-125 duration-300">
          <img
            className="object-contain h-48 w-96  object-position: center"
            src={Cabelo}
            alt="Cabelo"
          />
          <h2 className="text-2xl font-bold text-center py-8">Cabelo</h2>
          <p className="text-center text-4xl font-bold">10€</p>

          <button className="bg-black  text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:text-red-600 hover:scale-125 duration-300 hover:rounded" onClick={onClickAlert}>
            Efetuar Marcação
          </button>
        </div>
        <div className="w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-125 duration-300">
          <img
            className="object-contain h-48 w-96 "
            src={BarbaCabelo}
            alt="Barba e Cabelo"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Barba e Cabelo
          </h2>
          <p className="text-center text-4xl font-bold">14€</p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3  hover:text-red-600 hover:scale-125 duration-300 hover:rounded" onClick={onClickAlert}>
            Efetuar Marcação
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
