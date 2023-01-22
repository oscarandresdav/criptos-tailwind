import ImagenCripto from "./assets/img/criptos-Traxer-Unsplash.jpg";

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
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold uppercase text-center underline underline-offset-8 decoration-8 decoration-red-400">
          Cotiza tu criptomoneda
        </h1>
      </div>
    </div>
  );
}

export default App;
