import { Toaster } from "react-hot-toast";
import Router from "./Index";

export default function App() {
  return (
    <div>
      <Router />
      <Toaster />
    </div>
  );
}