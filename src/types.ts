export type ChartDataSet = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};

export type ChartData = {
  labels: string[];
  datasets: ChartDataSet[];
};
