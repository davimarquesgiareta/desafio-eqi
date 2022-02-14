import React from "react";
import Header from "../components/Header";
import ResultsContainer from "../components/ResultsContainer";
import SimulatorForm from "../components/SimulatorForm";

import "./App.css";

export default function App() {
  function print() {
    console.log("oi");
  }

  return (
    <>
      <Header title="Simulador de Investimentos" />

      <div className="content" style={{ marginTop: "2rem" }}>
        <SimulatorForm />
        <ResultsContainer />
      </div>
    </>
  );
}
