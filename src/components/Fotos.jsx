import React from "react";
import before_after1 from "../assets/before_after1.png";
import before_after2 from "../assets/before_after2.png";
import before_after3 from "../assets/before_after3.png";
import before_after4 from "../assets/before_after4.png";

// w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-125 duration-300 hover:rounded">

const Fotos = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h1 className="md:text-7xl sm:text-7xl text-6xl font-bold md:py-6 text-center">
        Estilos e técnicas de corte
      </h1>
      <p className="text-center text-2xl ">
        Os clientes podem escolher entre uma variedade de estilos e técnicas de
        corte, incluindo cortes clássicos e modernos, além de penteados
        estilizados;
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 rounded-full">
        <img
          className="w-[500px] mx-auto my-4 hover:scale-125 duration-300 hover:rounded"
          src={before_after1}
          alt="before_after1"
        />
        <img
          className="w-[500px] mx-auto my-4 hover:scale-125 duration-300 hover:rounded"
          src={before_after2}
          alt="before_after2"
        />
        <img
          className="w-[500px] mx-auto my-4 hover:scale-125 duration-300 hover:rounded"
          src={before_after3}
          alt="before_after3"
        />{" "}
        <img
          className="w-[500px] mx-auto my-4 hover:scale-125 duration-300 hover:rounded"
          src={before_after4}
          alt="before_after4"
        />
      </div>
    </div>
  );
};

export default Fotos;
