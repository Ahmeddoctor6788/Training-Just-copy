import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout"
import Home from "./Home";
import Profile from "./Profile"
import Login from "./Pages/Login"
import Register from "./Register/index"




export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          
        </Routes>
      </BrowserRouter>
    </>
  );
}