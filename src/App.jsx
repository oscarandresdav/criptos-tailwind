import { useEffect, useState } from "react";
import ImagenCripto from "./assets/img/criptos-Traxer-Unsplash.jpg";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";

function App() {
  const [error, setError] = useState(false);
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const { moneda, criptomoneda } = monedas;
      const cotizarCripto = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
      };

      cotizarCripto();
    }
  }, [monedas]);

  useEffect(() => {
    if (error) {
      window.addEventListener("click", () => setError(false));
    }
  }, [error]);

  return (
    <div className="md:flex h-screen items-center">
      <div className="px-10 md:w-1/2">
        <img
          className="rounded-3xl shadow-xl shadow-cyan-700"
          src={ImagenCripto}
          alt=""
        />
      </div>
      <div className="mt-10 mx-8 md:w-1/2">
        <h1 className="text-2xl sm:text-4xl mb-10 font-bold uppercase text-center">
          Cotiza tú{" "}
          <span className="font-mono lowercase rounded-lg text-indigo-700 bg-white px-1">
            criptomoneda
          </span>
        </h1>

        <Formulario setMonedas={setMonedas} error={error} setError={setError} />
        {resultado.PRICE && (
          <>
            <div
              className={
                Object.keys(resultado).length > 0
                  ? `block fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`
                  : `hidden fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`
              }
            >
              <Resultado
                resultado={resultado}
                setResultado={setResultado}
                monedas={monedas}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
