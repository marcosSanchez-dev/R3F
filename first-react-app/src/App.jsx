import Clicker from "./Clicker";
import { useState } from "react";

export default function App(params) {
  const [hasClicker, setHasCliker] = useState(true);

  const invertBoolean = () => {
    setHasCliker(!hasClicker);
  };

  return (
    <>
      <h3>Soy un component hijo App.jsx</h3>
      // * los componentes son funciones que exportas e importar esta App y el
      Clicker
      <div>
        <button onClick={invertBoolean}>
          {hasClicker ? "Esconde el componente" : "Muestrame el componente"}
        </button>
      </div>
      {/* Estas dos expreciones son lo mismo */}
      {hasClicker ? <Clicker /> : null}
      {/* {hasClicker && <Clicker />} */}
    </>
  );
}
