import React from "react"
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";
import ScrolBtn from "./Container/ScrolBtn";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <div className="App max-w-[1300px] m-auto  bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>

      <ScrolBtn />
      <Footer/>
    </div>
  );
}

export default App;
