import { type FC } from "react";
import { type Period, type Maybe, type Revenue, type ValueType } from "@/types";
import { AgCharts, type AgChartProps } from "ag-charts-react";
import { formatCurrency } from "@/utils/helpers";
import calculateCumulativeSum from "./linechartUtils";

interface Props {
  revenues: Maybe<Revenue[]>;
  period: Period;
  valueType: ValueType;
  loading: boolean;
}
const LineChart: FC<Props> = ({ revenues, period, valueType, loading }) => {
  const getCustomChartOptions = (
    revenues: Maybe<Revenue[]>,
    period: Period,
    valueType: ValueType
  ) => ({
    title: {
      text: `Cumulative ${period} revenue`,
    },
    data: calculateCumulativeSum(revenues, valueType),
    series: [
      {
        type: "line",
        xKey: "month",
        yKey: "cumulativeSum",
        yName: "cumulative revenue",
        tooltip: {
          renderer: (param: any) => {
            const value = param.datum.cumulativeSum;
            return {
              content: `Total: ${formatCurrency(value)}`,
            };
          },
        },
      },
    ],
  });

  if (loading) {
    return (
      <div className="flex align-center justify-center h-full">loading...</div>
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
