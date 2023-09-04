import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationForm from "./Components/ApplicationForm.js";
import BalanceSheet from "./Components/BalanceSheet.js";
import DecisionEngine from "./Components/DecisionEngine.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element ={<ApplicationForm />} />
        <Route path="/balance-sheet" element={<BalanceSheet />} />
        <Route path="/decision-engine" element={<DecisionEngine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
