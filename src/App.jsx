import ImagenCripto from "./assets/img/criptos-Traxer-Unsplash.jpg";
import Formulario from "./components/Formulario";

function App() {
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
          Cotiza tú <span className="font-mono lowercase rounded-lg text-indigo-700 bg-white px-1">criptomoneda</span>
        </h1>
        
        <Formulario />
      </div>
    </div>
  );
}

export default App;
