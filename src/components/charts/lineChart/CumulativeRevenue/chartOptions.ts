import { type Period, type Maybe, type Revenue, type ValueType } from "@/types";
import { formatCurrency } from "@/utils/helpers";
import calculateCumulativeSum from "./utils";

const getCustomChartOptions = (
  revenues: Maybe<Revenue[]>,
  period: Period,
  valueType: ValueType
) => ({
  minHeight: 340,
  title: {
    text: `Cumulative ${period} by ${valueType}`,
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
  axes: [
    {
      type: "category",
      position: "bottom",
    },
    {
      type: "number",
      label: {
        formatter: ({ value }: { value: number }) => formatCurrency(value),
      },
    },
  ],
});

export default getCustomChartOptions;
