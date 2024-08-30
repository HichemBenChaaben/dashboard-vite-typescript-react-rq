import { type Period, type Maybe, type Revenue, type ValueType } from "@/types";
import { formatCurrency } from "@/utils/helpers";
import calculateCumulativeSum from "./utils";

const getCustomChartOptions = (
  revenues: Maybe<Revenue[]>,
  period: Period,
  valueType: ValueType
) => ({
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
});

export default getCustomChartOptions;
