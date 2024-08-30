import { type FC } from "react";
import { type Period, type Maybe, type Revenue, type ValueType } from "@/types";
import { AgCharts, type AgChartProps } from "ag-charts-react";
import getCustomChartOptions from "./chartOptions";
import Spinner from "@/components/loadingIndicator/Spinner";

interface Props {
  revenues: Maybe<Revenue[]>;
  period: Period;
  valueType: ValueType;
  loading: boolean;
}

const LineChart: FC<Props> = ({ revenues, period, valueType, loading }) => {
  if (loading) {
    return (
      <div className="flex align-center justify-center h-full">
        <Spinner />
      </div>
    );
  }
  const options = getCustomChartOptions(
    revenues,
    period,
    valueType
  ) as AgChartProps["options"];
  return <AgCharts options={options} />;
};

export default LineChart;
