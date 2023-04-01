import { useState, useEffect } from "react";

export default function Clicker(params) {
  //! JS

  console.log("render");
  // * countState es un Array [value, setterFn]
  // const countState = useState(0);
  // const count = countState[0];
  // const setterCount = countState[1];

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
  }, []);

  // ! si quiero que useEffect se ejecute en el primer render de la pagina, debo enviarlo un array vacio, o dentro del array puede mandarle la constante que quiero que mire, y si esta cambia que que se ejecute el useEffect
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
      <h1>Click! = {count}</h1>
      <button onClick={clickEvent}>Click meeee </button>
    </>
  );
}
