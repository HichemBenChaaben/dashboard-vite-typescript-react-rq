import { useMemo, type FC } from "react";
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
import { formatCurrency } from "@/utils/helpers";
import { aggBestCustomers, aggInvoices } from "./utils";

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
  const invoicesAggregate = useMemo(
    () => aggInvoices(invoices as InvoicesTransformed[], valueType),
    [bestCustomers, valueType]
  );

  const bestCustomersAggregate = useMemo(
    () => aggBestCustomers(bestCustomers, valueType),
    [bestCustomers, valueType]
  );

  return (
    <>
      <div className="card w-full md:w-1/2">
        {!isBestCustomersLoading && bestCustomers && (
          <div className="mb-1 flex flex-row justify-between items-start">
            <div>
              <Title>
                <i className="text-md text-gray-800 mr-2 fas fa-user"></i>
                Customers
              </Title>
              <small className="text-gray-400">List of best customers</small>
            </div>
            <div className="items-center justify-center hidden lg:flex">
              <div
                className="p-2 mb-2 text-sm text-blue-800 rounded-md bg-blue-50 dark:bg-gray-800 dark:text-blue-400 border border-solid border-1 border-blue-100"
                role="alert"
              >
                <span className="font-medium mr-4 capitalize">
                  <span className="bg-white text-white h-[24px] w-[24px] inline-flex items-center justify-center p-2 mr-2 rounded-full">
                    <i className="text-blue-400 fa fa-info text-sm"></i>
                  </span>
                  total revenue aggregate
                </span>
                <strong>{formatCurrency(bestCustomersAggregate)}</strong>
              </div>
            </div>
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
          <div className="mb-1 flex flex-row justify-between items-start">
            <div>
              <Title>
                <i className="text-md text-gray-800 mr-2 fas fa-user"></i>
                Invoices
              </Title>
              <small className="text-gray-400">
                List of the latest invoices
              </small>
            </div>
            <div className="items-center justify-center hidden lg:flex">
              <div
                className="p-2 mb-2 text-sm text-blue-800 rounded-md bg-blue-50 dark:bg-gray-800 dark:text-blue-400 border border-solid border-1 border-blue-100"
                role="alert"
              >
                <span className="font-medium mr-4 capitalize">
                  <span className="bg-white text-white h-[24px] w-[24px] inline-flex items-center justify-center p-2 mr-2 rounded-full">
                    <i className="text-blue-400 fa fa-info text-sm"></i>
                  </span>
                  total revenue aggregate
                </span>
                <strong>{formatCurrency(invoicesAggregate)}</strong>
              </div>
            </div>
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
