import { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import CardResults from "./CardResults";
import api from "../../services/api";

import "./index.css";
import Graphic from "./Graphic";

export default function ResultsContainer() {
  const { yieldInfo, indexingTypes } = useContext(FormContext);

  //SIMULATION FIELDS
  const [grossFinalValue, setGrossFinalValue] = useState(""); // Valor Final Bruto
  const [aliquotIR, setAliquotIR] = useState(""); // Aliquota IR
  const [amountPaidIR, setAmoutPaidIR] = useState(""); // Valor Pago IR
  const [totalAmountInvested, setTotalAmountInvested] = useState(""); // Valor Total Investido
  const [liquidFinalValue, setLiquidFinalValue] = useState(""); // Valor Final Líquido
  const [liquidGain, setLiquidGain] = useState("");

  var arrayWithAportGlobal = [];
  var arrayWithoutAportGlobal = [];

  async function consumeApiSimulation(indexType, yieldInf) {
    const { data } = await api.get(
      `simulacoes?tipoIndexacao=${indexType}&tipoRendimento=${yieldInf}`
    );

    setGrossFinalValue(data[0].valorFinalBruto);
    setAliquotIR(data[0].aliquotaIR);
    setAmoutPaidIR(data[0].valorPagoIR);
    setTotalAmountInvested(data[0].valorTotalInvestido);
    setLiquidFinalValue(data[0].valorFinalLiquido);
    setLiquidGain(data[0].ganhoLiquido);

    var objectWithAportData = data[0].graficoValores.comAporte;
    var objectWithoutAportData = data[0].graficoValores.semAporte;

    var arrayWithAportData = Object.keys(objectWithAportData).map(
      (key) => objectWithAportData[key]
    );
    var arrayWithoutAportData = Object.keys(objectWithoutAportData).map(
      (key) => objectWithoutAportData[key]
    );

    arrayWithAportGlobal = arrayWithAportData;
    arrayWithoutAportGlobal = arrayWithoutAportData;
  }

  if (yieldInfo === "" || indexingTypes === "") {
    console.log("vazio");
  }

  if (yieldInfo === "brutoActive" && indexingTypes === "posActive") {
    consumeApiSimulation("pos", "bruto");
  }

  if (yieldInfo === "brutoActive" && indexingTypes === "preActive") {
    consumeApiSimulation("pre", "bruto");
  }

  if (yieldInfo === "liquidoActive" && indexingTypes === "preActive") {
    consumeApiSimulation("pre", "liquido");
  }

  if (yieldInfo === "liquidoActive" && indexingTypes === "posActive") {
    consumeApiSimulation("pos", "liquido");
  }

  if (yieldInfo === "liquidoActive" && indexingTypes === "fixedActive") {
    consumeApiSimulation("ipca", "liquido");
  }

  if (yieldInfo === "brutoActive" && indexingTypes === "fixedActive") {
    consumeApiSimulation("ipca", "bruto");
  }

  return (
    yieldInfo && (
      <div className="resultsContent">
        <div className="simulationResults">
          <h2>Resultado da Simulação</h2>
          <div className="cardsField">
            <CardResults
              valueType="Valor Final Bruto"
              price={`R$ ${grossFinalValue}`}
            />

            <CardResults valueType="Alíquota do IR" price={`R$ ${aliquotIR}`} />

            <CardResults
              valueType="Valor pago em IR"
              price={`R$ ${amountPaidIR}`}
            />
          </div>
          <div className="cardsField">
            <CardResults
              valueType="Valor Final Líquido"
              price={`R$ ${liquidFinalValue}`}
              labelColor="green"
            />

            <CardResults
              valueType="Valor Total Investido"
              price={`R$ ${totalAmountInvested}`}
            />

            <CardResults
              valueType="Ganho Líquido"
              price={`R$ ${liquidGain}`}
              labelColor="green"
            />
          </div>
        </div>
        <div>
          <h3> Projeção de valores </h3>
          <div>
            <Graphic
              yieldInfo={yieldInfo}
              indexTypes={indexingTypes}
              withAportArray={arrayWithAportGlobal}
              withoutAportArray={arrayWithoutAportGlobal}
            />
          </div>
        </div>
      </div>
    )
  );
}
