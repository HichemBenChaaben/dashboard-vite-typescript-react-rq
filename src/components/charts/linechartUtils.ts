import { type Revenue, type Maybe, type ValueType } from "@/types";

interface CumulativeSum {
  cumulativeSum: number;
  month?: string;
}
type ValueTypeKeys = "total_margin" | "total_revenue";

const calculateSortedCumulativeRevenue = (
  data: CumulativeSum[]
): CumulativeSum[] => {
  const cumulativeData: CumulativeSum[] = [];
  let runningTotal = 0;
  data.forEach((item) => {
    runningTotal += item.cumulativeSum;
    cumulativeData.push({
      month: item.month,
      cumulativeSum: runningTotal,
    });
  });

  return cumulativeData;
};

export default function calculateCumulativeSum(
  data: Maybe<Revenue[]>,
  valueType: ValueType
): CumulativeSum[] {
  const valueKey: ValueTypeKeys =
    valueType === "margin" ? "total_margin" : "total_revenue";

  const transformWeeklyToMonthly = (
    data: Revenue[]
  ): Record<string, CumulativeSum> => {
    return data.reduce(
      (acc, record) => {
        // Extract 'YYYY-MM'
        const month = record.start_date.substring(0, 7);
        if (!acc[month]) {
          acc[month] = {
            month,
            cumulativeSum: 0,
          };
        }
        acc[month].cumulativeSum += record[valueKey];
        return acc;
      },
      {} as Record<string, CumulativeSum>
    );
  };

  let marginOfRevenueData: CumulativeSum[] = [];
  // Check if the data is in monthly format or weekly format
  if (data && data.length > 0 && "month" in data[0]) {
    marginOfRevenueData = data.map((record: Revenue) => ({
      month: record.month,
      cumulativeSum: record[valueKey],
    }));
  } else if (data && data.length > 0 && "week" in data[0]) {
    const monthlyData = transformWeeklyToMonthly(data);
    marginOfRevenueData = Object.values(monthlyData);
  }
  return calculateSortedCumulativeRevenue(marginOfRevenueData) || [];
}
