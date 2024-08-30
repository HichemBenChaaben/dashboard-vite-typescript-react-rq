import { useContext } from "react";
import { UserFacetsContext } from "@/context/Facets.context";
import { useDashboardData } from "@/hooks/useDashboardData";
import BestProducts from "@/components/charts/barChart/BestProducts/BestProducts.chart";
import CumulativeRevenue from "@/components/charts/lineChart/CumulativeRevenue/CumulativeRevenue.chart";
import DataTables from "@/components/tables/DataTables";
import VerticalBarChartLoader from "@/components/loadingIndicator/VerticalBarChartLoader";

const Dashboard = () => {
  const { valueType, period } = useContext(UserFacetsContext);

  const {
    isBestCategoriesLoading,
    bestProductCategories,
    bestCustomers,
    isBestCustomersLoading,
    invoices,
    isInvoiceQueryLoading,
    revenues,
    isRevenuesLoading,
  } = useDashboardData();

  return (
    <>
      <div className="md:flex md:flex-row justify-between gap-4">
        <DataTables
          valueType={valueType}
          bestCustomers={bestCustomers}
          invoices={invoices}
          isBestCustomersLoading={isBestCustomersLoading}
          isInvoiceQueryLoading={isInvoiceQueryLoading}
        />
      </div>
      <div className="flex flex-col md:flex-row min-h-[420px] md:gap-4">
        <div className="card w-full md:w-1/2">
          {isBestCategoriesLoading && <VerticalBarChartLoader />}
          {bestProductCategories && !isBestCategoriesLoading && (
            <BestProducts
              title="Best products"
              valueType={valueType}
              data={bestProductCategories}
            />
          )}
        </div>
        <div className="card w-full md:w-1/2">
          <CumulativeRevenue
            revenues={revenues}
            loading={isRevenuesLoading}
            valueType={valueType}
            period={period}
          />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
