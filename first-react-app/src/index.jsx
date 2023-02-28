import "./style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));
const name = "Marcos";

root.render(
  // ! A estas llaves sin tag se les llama "fragments"

  <>
    <h1 className="title">Hello React</h1>
    <input type="checkbox" name="" id="the_checkbox" />
    {/* Esto es un comentario en JSX */}

    <label htmlFor="the_checkbox">dame click :) </label>
    <h1>{name}</h1>
    <h1>{name ? "yes" : "no"}</h1>
  </>
);
