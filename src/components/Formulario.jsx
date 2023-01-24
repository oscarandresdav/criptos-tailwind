import { useEffect, useState } from "react";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";
import Modal from "./Modal";

const Formulario = ({ error, setError }) => {
  const [criptos, setCriptos] = useState([]);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptomoneda, SelectCriptomonedas] = useSelectMonedas(
    "Elige tu criptomoneda",
    criptos
  );
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCripto = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCripto);
    };

    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes("")) {
      setError(true);

      return;
    }

    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectMonedas />
      <SelectCriptomonedas />
      <input
        className="w-full text-2xl font-bold uppercase rounded-lg p-3 mt-8 bg-indigo-500 active:bg-indigo-700 transition ease-in-out delay-150 hover:bg-indigo-600 hover:cursor-pointer hover:scale-105"
        type="submit"
        value="Cotizar"
      />
      {error && (
        <>
          <div
            className={
              error
                ? `block fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`
                : `fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`
            }
          >
            <Modal setError={setError} />
          </div>
        </>
      )}
    </form>
  );
};

export default Formulario;
