import "./style.css";
import { createRoot } from "react-dom/client";
import App from "./App";

console.log(App);

const root = createRoot(document.querySelector("#root"));
const name = "Marcos";

root.render(
  // ! A estas llaves sin tag se les llama "fragments"

  <>
    <h1 className="title">Hello React</h1>
    <input type="checkbox" name="" id="the_checkbox" />
    {/* Esto es un comentario en JSX */}

    <label htmlFor="the_checkbox">dame click :) </label>
    <h1 style={{ color: "red", backgroundColor: "blue" }}>{name}</h1>
    <h1 className="cute-paragraph">{name ? "yes" : "no"}</h1>
    <div>
      <App />
    </div>
  </>
);
