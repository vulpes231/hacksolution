/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";

const App = () => {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details/:srv" element={<Details />} />
      </Routes>
    </section>
  );
};

export default App;
