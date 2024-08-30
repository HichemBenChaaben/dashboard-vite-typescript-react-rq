import { render, screen } from "@testing-library/react";
import FlagDisplay from "@/components/flag/RegionToFlag";

describe("FlagDisplay component", () => {
  it("should render a flag with the correct region and country code", () => {
    const region = "United States";
    const countryCode = "US";
    render(<FlagDisplay region={region} countryCode={countryCode} />);
    expect(screen.getByAltText(region)).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const region = "United States";
    const countryCode = "US";
    expect(
      render(<FlagDisplay region={region} countryCode={countryCode} />)
    ).toMatchSnapshot();
  });
});
