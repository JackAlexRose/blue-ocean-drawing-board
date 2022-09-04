import React from "react";
import { ChartData } from "../../types";
import { BlueOceanChart } from "../BlueOceanChart/BlueOceanChart";
import BlueOceanForm from "../BlueOceanForm/BlueOceanForm";
import styles from "./ChartManager.module.css";

export const ChartManager = () => {
  const [chartData, setChartData] = React.useState<ChartData>({
    labels: [],
    datasets: [],
  });
  const [chartTitle, setChartTitle] = React.useState<string>("");
  const [factors, setFactors] = React.useState<string[]>([""]);

  React.useEffect(() => {
    setChartData({
      labels: factors,
      datasets: [
        {
          label: "My First Dataset",
          data: factors.map((_, i) => i * 1.5),
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
        {
          label: "My Second Dataset",
          data: factors.map((_, i) => i),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    });

    setChartTitle("My Chart");
  }, [factors]);

  return (
    <div className={styles.managerContainer}>
      <BlueOceanChart chartData={chartData} chartTitle={chartTitle} />
      <BlueOceanForm
        titleChangeHandler={setChartTitle}
        changeFactors={(factors) => setFactors(factors)}
      />
    </div>
  );
};
