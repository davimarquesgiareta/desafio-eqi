import ApexCharts from "apexcharts";
import { useEffect } from "react";
import api from "../../../services/api";

export default function Graphic(props) {
  const { yieldInfo, indexTypes } = props;

  var changeState = "";

  var yieldField = "";
  var indexField = "";

  if (yieldInfo === "brutoActive") {
    yieldField = "bruto";
    changeState = "bruto";
  }

  if (yieldInfo === "liquidoActive") {
    yieldField = "liquido";
    changeState = "liquido";
  }

  if (indexTypes === "fixedActive") {
    indexField = "ipca";
    changeState = "ipca";
  }

  if (indexTypes === "preActive") {
    indexField = "pre";
    changeState = "pre";
  }

  if (indexTypes === "posActive") {
    indexField = "pos";
    changeState = "pos";
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        `simulacoes?tipoIndexacao=${indexField}&tipoRendimento=${yieldField}`
      );

      var objectWithAportData = data[0].graficoValores.comAporte;
      var objectWithoutAportData = data[0].graficoValores.semAporte;

      var arrayWithAportData = Object.keys(objectWithAportData).map(
        (key) => objectWithAportData[key]
      );
      var arrayWithoutAportData = Object.keys(objectWithoutAportData).map(
        (key) => objectWithoutAportData[key]
      );

      var arrayDataNumbers = [];

      arrayWithAportData.forEach((element, index) => {
        arrayDataNumbers.push(index);
      });

      var arrayNumbers = arrayDataNumbers;
      var arrayData1 = arrayWithAportData;
      var arrayData2 = arrayWithoutAportData;

      var options = {
        colors: ["#ed8e53", "#000"],
        series: [
          {
            name: "Com Aporte",
            data: arrayData1,
          },
          {
            name: "Sem Aporte",
            data: arrayData2,
          },
        ],
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },

        xaxis: {
          title: {
            text: "Tempo (meses)",
          },
          categories: arrayNumbers,
        },
        yaxis: {
          title: {
            text: "Valor (R$)",
          },
          labels: {
            show: false,
          },
        },
        fill: {
          opacity: 1,
          colors: ["#ed8e53", "#000"],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "R$ " + val + "";
            },
          },
        },
        legend: {
          labels: {
            colors: ["#ed8e53", "#000"],
          },
        },
      };
      var chart = new ApexCharts(document.querySelector(".chart"), options);
      chart.render();
    })();
  }, [changeState]);

  return <div className="chart"></div>;
}
