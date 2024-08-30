import { FC } from "react";
import { AgCharts, type AgChartProps } from "ag-charts-react";
import { type Maybe, type ValueType, type BestProductCategory } from "@/types";
import getCustomChartOptions from "./barChart/BestProducts/chartOptions";

interface Props {
  data: Maybe<BestProductCategory[]>;
  valueType: ValueType;
  title: string;
}

const BarChart: FC<Props> = ({ data = [], valueType, title }) => {
  const options = getCustomChartOptions(
    data,
    valueType,
    title
  ) as AgChartProps["options"];

  return <AgCharts options={options} />;
};

export default BarChart;
