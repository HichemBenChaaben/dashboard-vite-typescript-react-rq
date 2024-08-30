import Flag from "react-flagkit";
import { type FC } from "react";

interface Props {
  region: string;
  countryCode: Uppercase<string>;
}
const FlagDisplay: FC<Props> = ({ region, countryCode }) => (
  <Flag title={region} alt={region} country={countryCode} />
);

export default FlagDisplay;
