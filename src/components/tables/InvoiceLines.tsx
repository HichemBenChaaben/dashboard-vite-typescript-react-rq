import { type FC } from "react";
import {
  type Maybe,
  type InvoiceLine,
  type InvoicesTransformed,
} from "@/types";
import { formatCurrency } from "@/utils/helpers";
import FlagDisplay from "@/components/flag/RegionToFlag";

interface InvoiceLinesProps {
  invoice: Maybe<InvoicesTransformed>;
}
const InvoiceLines: FC<InvoiceLinesProps> = ({ invoice }) => {
  if (!invoice) {
    return (
      <div className="flex justify-center align-center">
        no invoice to display
      </div>
    );
  }
  return (
    <div className="max-h-[400px] overflow-scroll">
      <div className="sticky top-[-10px] flex flex-row gap-2 p-2 bg-gray-50 mb-2 justify-between">
        <div className="flex justify-center align-center gap-2">
          <div className="flex justify-center align-center">
            <FlagDisplay
              region={invoice.region}
              countryCode={invoice.countryCode}
            />
          </div>
          <div className="font-semibold">{invoice.customer_name}</div>
        </div>
        <div className="font-semibold flex justify-end align-end text-blue-800">
          {formatCurrency(invoice.total_invoice)}
        </div>
      </div>
      <div className="border border-gray-300">
        <table className="max-h-[300px] overflow-scroll bg-white text-sm w-full">
          <thead className="sticky z-2 top-[-1px] border-t-1 border-gray-200 z-99 bg-white border-collapse py-2">
            <tr className="p-2 border-b text-left font-semibold capitalize">
              <th className="p-2">id</th>
              <th className="p-2">product name</th>
              <th className="p-2 text-right">quantity</th>
              <th className="p-2 text-right">total line</th>
              <th className="p-2 text-right">total margin</th>
              <th className="p-2 text-right">unit price</th>
            </tr>
          </thead>
          <tbody className="text-md text-gray-700">
            {invoice.invoice_lines?.map((line: InvoiceLine, index) => {
              return (
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-slate-100"
                  } hover:bg-slate-200 cursor-pointer`}
                  key={`invoice-line-${index}`}
                >
                  <td className="p-2">{line.product_id}</td>
                  <td className="p-2">{line.product_name}</td>
                  <td className="p-2 text-center">{line.quantity}</td>
                  <td className="p-2 text-right">
                    {formatCurrency(line.total_line)}
                  </td>
                  <td className="p-2 text-right">
                    {formatCurrency(line.total_margin)}
                  </td>
                  <td className="p-2 text-right">
                    {formatCurrency(line.unit_price)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceLines;
