import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather Search Engine</h1>

      <Form />
      <p>link to my github repository
      <a href="https://nmaryy.github.io/weather-react/"> click here </a>

      </p>
    </div>
  </StrictMode>
);
