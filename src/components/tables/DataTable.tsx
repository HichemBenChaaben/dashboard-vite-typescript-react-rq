import React from "react";
import { FixedSizeList as List } from "react-window";
import { type ReactNode } from "react";
import LoadingTable from "./LoadingTable";

interface Column {
  header: string;
  accessor: string; // Key to access data
  align?: "left" | "right" | "center"; // Optional alignment
}

interface DataTableProps<T> {
  data: T[] | null; // Data could be null or an array of objects
  columns: Column[]; // Column definitions
  loading: boolean;
  noDataMessage?: string; // Optional message when no data is available
}

const Row = <T,>({
  index,
  style,
  data,
}: {
  index: number;
  style: React.CSSProperties;
  data: { columns: Column[]; data: T[] };
}) => {
  const { columns, data: rows } = data;
  const row = rows[index];

  if (!row) {
    return <div style={style}>Loading...</div>;
  }

  return (
    <div
      style={{
        ...style,
        display: "flex",
        borderBottom: "1px solid #e2e8f0",
        backgroundColor: index % 2 === 0 ? "white" : "#f8fafc",
      }}
      className="hover:bg-slate-200"
    >
      {columns.map((col, colIndex) => (
        <div
          key={colIndex}
          style={{
            flex: col.align === "right" ? "0 0 auto" : "1 1 auto",
            textAlign: col.align || "left",
            padding: "8px",
          }}
        >
          {row[col.accessor as keyof T] as ReactNode}
        </div>
      ))}
    </div>
  );
};

const DataTable = <T,>({
  data,
  columns,
  loading,
  noDataMessage = "No items to display",
}: DataTableProps<T>) => {
  if (loading) {
    return <LoadingTable />;
  }

  // no data to dislay then display an empty message
  if (!loading && data?.length === 0) {
    return <>{noDataMessage}</>;
  }

  return (
    <div className="overflow-auto h-[400px] border border-gray-300 rounded-md shadow-md">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div style={{ display: "flex" }}>
          {columns.map((col, index) => (
            <div
              key={index}
              style={{
                flex: col.align === "right" ? "0 0 auto" : "1 1 auto",
                textAlign: col.align || "left",
                padding: "8px",
              }}
              className="font-semibold capitalize"
            >
              {col.header}
            </div>
          ))}
        </div>
      </div>
      <List
        height={400} // Height of the table container
        itemCount={data?.length || 0} // Number of rows
        itemSize={40} // Height of each row
        width="100%" // Width of the table container
        itemData={{ columns, data: data || [] }}
      >
        {Row}
      </List>
    </div>
  );
};

export default DataTable;
