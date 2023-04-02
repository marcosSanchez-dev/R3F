import { useState, useEffect } from "react";

export default function Clicker(params) {
  //! JS

  // * countState es un Array [value, setterFn] por el uso de "useState"
  // const countState = useState(0);
  // const count = countState[0];
  // const setterCount = countState[1];

  // ! dentro de "useState" siempre va a existir el valor (count) y una funcion parecida al computed de VUE "setterCount"
  const [count, setterCount] = useState(
    parseInt(localStorage.getItem("count") ?? 0)
  );

  useEffect(() => {
    // * al agregar ?? "nulish coallesing operator" le decimos a JS que si ese valor llega undefined o Null que me regrese otro valor
    // const savedCount = parseInt(localStorage.getItem("count") ?? 0);
    // ! al llamar a " setterCount " estamos renderizando nuevamente el componente por cada "call" que tenga
    // setterCount(savedCount);
    // * otra forma de convertir strings a numeros
    //console.log(+count);

    console.log("se creo el componente");

    //! Esta es la forma de activar alguna accion cuando el componente se destruya
    return () => {
      console.log("se destruyo el componente");
      localStorage.removeItem("count");
    };
  }, []);

  // ! si quiero que useEffect se ejecute en el primer render de la pagina, debo enviarlo un array vacio, o dentro del array puedo mandarle la constante que quiero que mire, y si esta cambia que que se ejecute el useEffect
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const clickEvent = () => {
    //setterCount(count + 1);

    // ! Esta es la mejor forma de usar la funcion Setter ya que obtienes el currentValue del count
    setterCount((count) => count + 1);
  };

  //! HTML
  return (
    <>
      <h4>Soy un componente nieto</h4>
      <h1>Click! = {count}</h1>
      <button onClick={clickEvent}>Click meeee </button>
    </>
  );
}
