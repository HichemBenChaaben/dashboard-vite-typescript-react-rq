import { useContext } from "react";
import { UserFacetsContext } from "@/context/Facets.context";
import ToggleGroup from "@/components/toggleGroup/ToggleGroup";
import Tag from "@/components/tag/Tag";

const AppBar = () => {
  const { period, setPeriod, valueType, setValueType } =
    useContext(UserFacetsContext);

  const buttonsGroupConfig = [
    {
      value: "margin",
      icon: "fa-chart-line",
      isActive: valueType === "margin",
      onClick: () => setValueType("margin"),
    },
    {
      value: "revenue",
      icon: "fa-dollar-sign",
      isActive: valueType === "revenue",
      onClick: () => setValueType("revenue"),
    },
  ];
  const togglePeriodButtonGroup = [
    {
      value: "margin",
      icon: "fas fa-calendar-alt",
      isActive: period === "monthly",
      onClick: () => setPeriod("monthly"),
    },
    {
      value: "revenue",
      icon: "fas fa-calendar-week",
      isActive: period === "weekly",
      onClick: () => setPeriod("weekly"),
    },
  ];
  return (
    <div className="flex mb-2 justify-between p-4 lg:px-6 bg-white sticky top-0 z-10 rounded overflow-hidden border border-solid border-gray-300 w-full">
      <div className="hidden md:flex md:flex-col">
        <h2 className="text-xl">Dashboard</h2>
        <small className="text-gray-400 capitalize">tables, ivoices</small>
      </div>
      <div className="flex items-center font-semibold capitalize justify-center align-center align-center">
        <Tag>{valueType}</Tag>
        <Tag>{period}</Tag>
      </div>

      <div className="flex gap-2">
        <ToggleGroup buttons={buttonsGroupConfig} />
        <ToggleGroup buttons={togglePeriodButtonGroup} />
      </div>
    </div>
  );
};

export default AppBar;
