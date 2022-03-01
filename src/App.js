import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/LandingpPage/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
