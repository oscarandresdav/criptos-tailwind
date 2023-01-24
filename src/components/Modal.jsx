import React from "react";

const Modal = ({ setError }) => {
  const closeModalError = () => {
    setError(false);
  };

  return (
    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div className="mt-3 text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
          <svg
            className="h-6 w-6 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M 5 19 L 19 5 M 5 5 L 19 19"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Error!</h3>
        <div className="mt-2 px-7 py-3">
          <p className="text-sm text-gray-500">
            Todos los campos son obligatorios!
          </p>
        </div>
        <div className="items-center px-4 py-3">
          <button
            className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={closeModalError}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
