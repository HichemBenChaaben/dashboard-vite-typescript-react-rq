import { type FC } from "react";
import LoadingTable from "./LoadingTable";
import { type Maybe, type BestCustomer, ValueType } from "@/types";
import { formatCurrency } from "@/utils/helpers";

interface Props {
  data: Maybe<BestCustomer[]>;
  loading: boolean;
  valueType: ValueType;
}

const BestCustomersTable: FC<Props> = ({
  data,
  loading,
  valueType,
  ...restProps
}) => {
  if (loading) {
    return <LoadingTable />;
  }
  return (
    <table
      className="bg-white border border-gray-300 text-sm w-full"
      {...restProps}
    >
      <thead className="sticky z-2 top-[-1px] border-t-1 border-gray-200 z-99 bg-white border-collapse py-2">
        <tr className="p-2 border-b text-left font-semibold capitalize">
          <th scope="col" className="p-2">
            name
          </th>
          <th scope="col" className="p-2 text-right">
            invoice count
          </th>
          <th scope="col" className="p-2 text-right">
            {valueType === "margin" ? "total margin" : "total revenue"}
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.length === 0 && !loading && "no items to display"}
        {data?.map((row: BestCustomer, index: number) => (
          <tr
            key={row.customer_id}
            className={`${
              index % 2 === 0 ? "bg-white" : "bg-slate-100"
            } hover:bg-slate-200`}
          >
            <td className="p-2">{row.customer_name}</td>
            <td className="p-2 text-right">{row.invoices_count}</td>
            <td className="p-2 text-right">
              {valueType === "margin"
                ? formatCurrency(row.total_margin)
                : formatCurrency(row.total_revenue)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BestCustomersTable;
