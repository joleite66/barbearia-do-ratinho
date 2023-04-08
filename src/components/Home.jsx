import React from "react";
import Typed from "react-typed";

const onClickAlert = () => {
  alert("\n Funcionalidade brevemente disponivel \n \n Para marcações contactar   914 716 580");
}
const Home = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          A barba dos seus sonhos começa aqui...
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          A sua aparência é a nossa prioridade!{" "}
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            O cliente é a nossa
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["prioridade", "primazia", "eleição"]}
            typeSpeed={140}
            backSpeed={120}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Serviços de alta qualidade em corte de cabelo, barba e cuidados com os
          pelos faciais
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black" onClick={onClickAlert}>
          Marque já a sua visita
        </button>
      </div>
    </div>
  );
};

export default Home;
