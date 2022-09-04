import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartData } from "../../types";
import styles from "./BlueOceanChart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export type ChartProps = {
  chartData: ChartData;
  chartTitle: string;
};

export const BlueOceanChart: React.FC<ChartProps> = ({
  chartData,
  chartTitle,
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <Line data={chartData} options={options} />
    </div>
  );
};
