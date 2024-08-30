import { type FC, useState } from "react";
import LoadingTable from "./LoadingTable";
import { type ValueType, type Maybe, type InvoicesTransformed } from "@/types";
import { formatCurrency, formatDate } from "@/utils/helpers";
import FlagDisplay from "@/components/flag/RegionToFlag";
import Modal from "@/components/modal/Modal";
import InvoiceLines from "@/components/tables/InvoiceLines";

interface Props {
  data: Maybe<InvoicesTransformed[]>;
  loading: boolean;
  error?: string;
  valueType: ValueType;
}

const LatestInvoicesTable: FC<Props> = ({
  data = [],
  loading = true,
  error,
  valueType,
}) => {
  const [invoiceById, setInvoiceById] = useState<Maybe<InvoicesTransformed>>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const getInvoiceLines = (id: number) => {
    const invoiceById = data.find((item) => item.id === id);
    setInvoiceById(invoiceById);
    setShowModal(true);
  };
  const handleClickRow = (id: number) => {
    getInvoiceLines(id);
  };
  if (loading) {
    return <LoadingTable />;
  }
  if (error) {
    return <div>Error loading the data</div>;
  }

  return (
    <>
      {showModal && (
        <Modal
          title={`Invoice id #${invoiceById?.id}`}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        >
          <InvoiceLines invoice={invoiceById} />
        </Modal>
      )}
      <table className="bg-white border border-gray-300 text-sm w-full">
        <thead className="sticky z-2 top-[-1px] border-t-1 border-gray-200 z-99 bg-white border-collapse py-2">
          <tr className="p-2 border-b text-left font-semibold capitalize">
            <th scope="col" className="p-2">
              name
            </th>
            <th scope="col" className="p-2 text-right">
              region
            </th>
            <th scope="col" className="p-2 text-right">
              date
            </th>
            <th scope="col" className="p-2 text-right">
              total {valueType === "margin" ? "margin" : "invoice"}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index: number) => (
            <tr
              onClick={() => handleClickRow(item.id)}
              key={`${item.customer_id}-invoices-${index}`}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-slate-100"
              } hover:bg-slate-200 cursor-pointer`}
            >
              <td className="p-2">{item.customer_name}</td>
              <td className="p-2 text-left">
                <span className="flex justify-end">
                  <FlagDisplay
                    region={item.region}
                    countryCode={item.countryCode}
                  />
                </span>
              </td>
              <td className="p-2 text-right">{formatDate(item.date)}</td>
              <td className="p-2 text-right">
                {valueType === "margin"
                  ? formatCurrency(item.total_margin)
                  : formatCurrency(item.total_invoice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LatestInvoicesTable;
