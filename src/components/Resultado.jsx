import React from "react";

const Resultado = ({ resultado, setResultado, monedas }) => {
  const { moneda, criptomoneda } = monedas;
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  const closeModalResultado = () => {
    setResultado({});
  };
  return (
    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div className="mt-3 text-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-5">
          Resultado
        </h3>
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gray-100">
          <img
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt={`Imagen ${criptomoneda}`}
          />
        </div>
        <div className="mt-2 px-7 py-3 text-left">
          <p className="text-sm text-gray-700">
            Moneda: <span>{moneda}</span>
          </p>
          <p className="text-sm text-gray-700">
            Criptomoneda: <span>{criptomoneda}</span>
          </p>
        </div>
        <div className="mt-2 px-7 py-3 text-left">
          <p className="text-md text-gray-700">
            El Precio es de: <span className="font-bold">{PRICE}</span>
          </p>
          <p className="text-sm text-gray-600">
            Precio mas alto del día:{" "}
            <span className="font-bold">{HIGHDAY}</span>
          </p>
          <p className="text-sm text-gray-600">
            Precio mas bajo del día: <span className="font-bold">{LOWDAY}</span>
          </p>
          <p className="text-sm text-gray-600">
            Variación últimas 24 horas:{" "}
            <span className="font-bold">{CHANGEPCT24HOUR}</span>
          </p>
          <p className="text-sm text-gray-600">
            Última Actualización:{" "}
            <span className="font-bold">{LASTUPDATE}</span>
          </p>
        </div>
        <div className="items-center px-4 py-3">
          <button
            className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={closeModalResultado}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
