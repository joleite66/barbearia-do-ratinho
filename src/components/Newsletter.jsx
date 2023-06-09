import React from "react";

const onClickAlert = () => {
  alert(
    "\n Funcionalidade brevemente disponivel \n \n Para marcações contactar   914 716 580"
  );
};

const Newsletter = () => {
  return (
    <div className="w-full py-[1rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-2">
          <h1 className="md:text-7xl text-black sm:text-7xl text-6xl font-bold md:py-4 text-center">
            CONTACTO
          </h1>
          <p className="text-l font-bold text-center">
            <strong>914 716 580</strong> JOÃO OLIVEIRA
          </p>
          <p className="text-l font-bold text-center">
            R. Manuel Moreira da Cruz 165
          </p>
          <p className="text-l font-bold text-center">4405-662 Gulpilhares</p>{" "}
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-white bg-[#000300]"
              type="email"
              placeholder="Deixe o seu contacto"
            />
            <button
              className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
              onClick={onClickAlert}
            >
              ENVIAR
            </button>
          </div>
          <p className="text-center">
            Preocupamo-nos com a proteção da tua privacidade.
          </p>
        </div>
      </div>
    </div>
  );
}; //bg-[#000300]

export default Newsletter;
