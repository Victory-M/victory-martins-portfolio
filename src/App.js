import React from "react";
import { CssBaseline } from "@mui/material";
import Nav from "./components/Nav";
import Home from "./scenes/Home";
import Laundry from "./scenes/Laundry";
import Ethdomain from "./scenes/Ethdomain";
import Jewelled from "./scenes/Jewelled";
import Rubystore from "./scenes/Rubystore";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <CssBaseline />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/ethdomain" element={<Ethdomain />} />
        <Route path="/jewelled" element={<Jewelled />} />
        <Route path="/rubystore" element={<Rubystore />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
