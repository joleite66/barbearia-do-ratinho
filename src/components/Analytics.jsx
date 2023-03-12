import React from "react";
import before_after1 from "../assets/before_after1.png";
import before_after2 from "../assets/before_after2.png";
import before_after3 from "../assets/before_after3.png";
import before_after4 from "../assets/before_after4.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        
        <img
          className="w-[500px] mx-auto my-4"
          src={before_after1}
          alt="before_after1"
        />
        <img
          className="w-[500px] mx-auto my-4"
          src={before_after2}
          alt="before_after2"
        />
        <img
          className="w-[500px] mx-auto my-4"
          src={before_after3}
          alt="before_after3"
        />{" "}
        <img
          className="w-[500px] mx-auto my-4"
          src={before_after4}
          alt="before_after4"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">ANTES E DEPOIS</p>
          <h1 className="m:text-4xl sm:tex-3xl text-2xl font-bold py-2">
            Estilos e técnicas de corte
          </h1>
          <p>
            Os clientes podem escolher entre uma variedade de estilos e técnicas
            de corte, incluindo cortes clássicos e modernos, além de penteados
            estilizados;
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Marque já uma visita
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
