import React from "react";

const Formulario = () => {
  return (
    <form>
      <input
        className="w-full text-2xl font-bold uppercase p-3 bg-indigo-500 active:bg-indigo-700 hover:bg-indigo-600 hover:cursor-pointer"
        type="submit"
        value="Cotizar"
      />
    </form>
  );
};

export default Formulario;
