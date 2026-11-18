import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainStore from "./MainStore.jsx";

createRoot(document.getElementById("root")).render(
  <MainStore>
    <App />
  </MainStore>,
);