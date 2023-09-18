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
    </div>
  </StrictMode>
);
