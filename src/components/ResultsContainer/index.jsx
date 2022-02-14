import react from "react";
import CardResults from "./CardResults";

import "./index.css";

export default function ResultsContainer() {
  return (
    <div className="resultsContent">
      <div className="simulationResults">
        <h2>Resultado da Simulação</h2>
        <div className="cardsField">
          <CardResults valueType="Valor Final Bruto" price="R$ 5000" />

          <CardResults valueType="Alíquota do IR" price="R$ 5000" />

          <CardResults valueType="Valor pago em IR" price="R$ 5000" />
        </div>
        <div className="cardsField">
          <CardResults valueType="Valor Final Líquido" price="R$ 5000" />

          <CardResults valueType="Valor Total Investido" price="R$ 5000" />

          <CardResults valueType="Ganho Líquido" price="R$ 5000" />
        </div>
      </div>
      <div>
        <h3> Projeção de valores </h3>
      </div>
    </div>
  );
}
