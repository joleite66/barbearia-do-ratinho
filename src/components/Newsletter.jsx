import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Queres saber mais informações?
          </h1>
          <p>Deixa o teu e-mail para mais informações</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Escreve o e-mail" />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py3">
              Contacta-me
            </button>
          </div>
          <p>Nós nos preocupamos com a proteção da tua privacidade. Lê a nossa <span className="text-[#00df9a]">Política de privacidade</span></p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
