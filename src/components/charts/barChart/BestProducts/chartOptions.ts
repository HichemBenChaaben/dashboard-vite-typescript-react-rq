import { formatCurrency } from "@/utils/helpers";
import { type ValueType, type BestProductCategory } from "@/types";

interface BarChartOptions {
  title: {
    text: string;
  };
  data: BestProductCategory[];
  series: {
    type: string;
    xKey: string;
    yKey: string;
    tooltip: {
      renderer: (param: Object) => { content: string };
    };
  }[];
  axes: any[];
}

type MarginOrRevenueKeys = "total_margin" | "total_revenue";

const getCustomChartOptions = (
  data: BestProductCategory[],
  valueType: ValueType,
  title: string
): BarChartOptions => {
  const valueTypeMapping: Record<ValueType, MarginOrRevenueKeys> = {
    margin: "total_margin",
    revenue: "total_revenue",
  };

  return {
    title: {
      text: `${title} by ${valueType}`,
    },
    data,
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
    series: [
      {
        type: "bar",
        xKey: "category_name",
        yKey: valueTypeMapping[valueType],
        tooltip: {
          renderer: (param: any) => {
            const monetaryValue = param.datum[valueTypeMapping[valueType]];
            return {
              content: `Total: ${formatCurrency(monetaryValue)}`,
            };
          },
        },
      },
    ],
  };
};

export default getCustomChartOptions;
