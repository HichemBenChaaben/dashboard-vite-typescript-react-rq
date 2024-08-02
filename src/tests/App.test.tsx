import { expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";

import App from "../App";

test("App renders a greetings", () => {
  expect(1 + 1).toBe(2);

  const { getByText } = render(<App />);

  expect(getByText("Hello world!")).toBeInTheDocument();
});
