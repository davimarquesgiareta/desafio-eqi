import React, { useState } from "react";
import Header from "../components/Header";
import ResultsContainer from "../components/ResultsContainer";
import SimulatorForm from "../components/SimulatorForm";
import { FormContext } from "../context/FormContext";

import "./App.css";

export default function App() {
  const [yieldInfo, setYieldInfo] = useState("");
  const [indexingTypes, setIndexingTypes] = useState("");

  function changeSimulatorInfo(yieldInf, indexType) {
    setYieldInfo(yieldInf);
    setIndexingTypes(indexType);
  }

  return (
    <>
      <Header title="Simulador de Investimentos" />
      <FormContext.Provider
        value={{ yieldInfo, indexingTypes, changeSimulatorInfo }}
      >
        <div className="content" style={{ marginTop: "2rem" }}>
          <SimulatorForm />
          <ResultsContainer />
        </div>
      </FormContext.Provider>
    </>
  );
}
