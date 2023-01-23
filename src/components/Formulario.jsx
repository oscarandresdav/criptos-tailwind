import { useEffect, useState } from "react";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";

const Formulario = () => {
  const [criptos, setCriptos] = useState([]);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptomoneda, SelectCriptomonedas] = useSelectMonedas("Elige tu criptomoneda", criptos);
  useEffect(() => {
    const consultarAPI = async() => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCripto = resultado.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        }
        return objeto;
      });
      setCriptos(arrayCripto);
    }

    consultarAPI();
  }, [])

  return (
    <form>
      <SelectMonedas />
      <SelectCriptomonedas />
      <input
        className="w-full text-2xl font-bold uppercase p-3 mt-8 bg-indigo-500 active:bg-indigo-700 hover:bg-indigo-600 hover:cursor-pointer"
        type="submit"
        value="Cotizar"
      />
    </form>
  );
};

export default Formulario;
