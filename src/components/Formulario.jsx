import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";

const Formulario = () => {
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);

  console.log(moneda);

  return (
    <form>
      <SelectMonedas />
      <input
        className="w-full text-2xl font-bold uppercase p-3 mt-8 bg-indigo-500 active:bg-indigo-700 hover:bg-indigo-600 hover:cursor-pointer"
        type="submit"
        value="Cotizar"
      />
    </form>
  );
};

export default Formulario;
