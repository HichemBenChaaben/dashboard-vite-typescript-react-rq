import { type FC } from "react";
import {
  type Maybe,
  type BestCustomer,
  type ValueType,
  type InvoicesTransformed,
} from "@/types";
import BestCustomersTable from "@/components/tables/BestCustomersTable";
import LatestInvoicesTable from "@/components/tables/LatestInvoicesTable";
import TitleLoader from "../loadingIndicator/TitleLoader";
import Title from "@/components/title/Title";

interface Props {
  valueType: ValueType;
  bestCustomers: Maybe<BestCustomer[]>;
  isBestCustomersLoading: boolean;
  invoices: Maybe<InvoicesTransformed[] | InvoicesTransformed>;
  isInvoiceQueryLoading: boolean;
}

const DataTables: FC<Props> = ({
  valueType,
  bestCustomers,
  isBestCustomersLoading = true,
  invoices,
  isInvoiceQueryLoading = true,
}) => {
  return (
    <>
      <div className="card w-full md:w-1/2">
        {!isBestCustomersLoading && bestCustomers && (
          <div className="mb-2">
            <Title>
              <i className="text-md text-gray-800 mr-2 fas fa-user"></i>
              Customers
            </Title>
            <small className="text-gray-400">List of best customers</small>
          </div>
        )}
        {isBestCustomersLoading && !bestCustomers && <TitleLoader />}
        <div className="overflow-y-auto h-[340px] mb-4">
          <BestCustomersTable
            valueType={valueType}
            data={bestCustomers as Maybe<BestCustomer[]>}
            loading={isBestCustomersLoading}
          />
        </div>
      </div>
      <div className="card w-full md:w-1/2">
        {!isInvoiceQueryLoading && invoices && (
          <div className="mb-2">
            <Title>
              <i className="text-md text-gray-800 mr-2 fas fa-file-invoice"></i>
              Invoices
            </Title>
            <small className="text-gray-400">Latest 15 invoices</small>
          </div>
        )}
        {isInvoiceQueryLoading && <TitleLoader />}
        <div className="overflow-y-auto h-[340px]">
          <LatestInvoicesTable
            valueType={valueType}
            data={invoices as InvoicesTransformed[]}
            loading={isInvoiceQueryLoading}
          />
        </div>
      </div>
    </>
  );
};

export default DataTables;
