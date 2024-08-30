import { useContext } from "react";
import { UserFacetsContext } from "@/context/Facets";
import { useDashboardData } from "@/hooks/useDashboardData";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import Filters from "@/components/filters/Filters";
import DataTables from "@/components/tables/DataTables";
import VerticalBarChartLoader from "@/components/loadingIndicator/VerticalBarChartLoader";
import useHotkey from "@/hooks/useHotKey";
import { createHotkeysConfig } from "@/utils/helpers";
import HotKeys from "@/components/hotkeys";
import Modal from "@/components/modal/Modal";

const Dashboard = () => {
  const { valueType, setValueType, period, setPeriod } =
    useContext(UserFacetsContext);

  const hotKeys = createHotkeysConfig(setValueType, setPeriod);

  hotKeys.forEach((hotkey) => {
    useHotkey(hotkey.keys, hotkey.action, valueType, period);
  });

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
      <Filters />
      <div className="md:flex md:flex-row justify-between gap-4">
        <DataTables
          valueType={valueType}
          bestCustomers={bestCustomers}
          invoices={invoices}
          isBestCustomersLoading={isBestCustomersLoading}
          isInvoiceQueryLoading={isInvoiceQueryLoading}
        />
      </div>
      <div className="flex flex-col md:flex-row min-h-[420px] gap-4">
        <div className="card w-full md:w-1/2">
          {isBestCategoriesLoading && <VerticalBarChartLoader />}
          {bestProductCategories && !isBestCategoriesLoading && (
            <BarChart
              title="Best products"
              valueType={valueType}
              data={bestProductCategories}
            />
          )}
        </div>
        <div className="card w-full md:w-1/2">
          <LineChart
            revenues={revenues}
            loading={isRevenuesLoading}
            valueType={valueType}
            period={period}
          />
        </div>
        <HotKeys />
      </div>
    </>
  );
};
export default Dashboard;
