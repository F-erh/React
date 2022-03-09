import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Sobre from "./Pages/Sobre";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Sobre" element={<Sobre />} />
      <Route path="Contato" element={<Contato />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);