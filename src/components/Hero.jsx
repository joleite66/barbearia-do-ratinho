import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800 px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          {" "}
          A barba dos seus sonhos começa aqui...
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          {" "}
          A sua aparência é a nossa prioridade!{" "}
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            A satisfação do cliente é a nossa
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["prioridade", "primazia", "eleição"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Serviços de alta qualidade em corte de cabelo, barba e cuidados com os
          pelos faciais
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Marque já uma visita
        </button>
      </div>
    </div>
  );
};
//A Barbearia do Ratinho é um estabelecimento tradicional e acolhedor, com uma decoração clássica e equipe altamente qualificada. Eles oferecem serviços de alta qualidade em corte de cabelo, barba e cuidados com os pelos faciais, utilizando produtos de alta qualidade e oferecendo atendimento personalizado e amigável aos clientes. A satisfação do cliente é uma prioridade e a Barbearia do Ratinho busca proporcionar uma experiência única e memorável a cada visita.

export default Hero;
