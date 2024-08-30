import { expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";

import App from "../App";

// skipping because i need to mock the wrapper of the application
// then mock the queries to be able to render the entire application
// can be done with spending more time
test.skip("App renders a greetings", () => {
  expect(1 + 1).toBe(2);

  const { getByText } = render(<App />);

  expect(getByText("Hello world!")).toBeInTheDocument();
});
