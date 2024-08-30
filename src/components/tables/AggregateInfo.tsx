import { type FC } from "react";
import { formatCurrency } from "@/utils/helpers";
import Alert from "@/components/alert/Alert";

interface AggregateInfoProps {
  title: string;
  aggregate: number;
}
const AggregateInfo: FC<AggregateInfoProps> = ({ title, aggregate }) => {
  return (
    <Alert>
      <span className="font-medium mr-4 capitalize">
        <span className="bg-white text-white h-[24px] w-[24px] inline-flex items-center justify-center p-2 mr-2 rounded-full">
          <i className="text-blue-400 fa fa-info text-sm"></i>
        </span>
        {title}
      </span>
      <strong>{formatCurrency(aggregate)}</strong>
    </Alert>
  );
};

export default AggregateInfo;
