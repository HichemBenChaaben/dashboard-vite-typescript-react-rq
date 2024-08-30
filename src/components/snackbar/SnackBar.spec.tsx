import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SnackBar from "@/components/snackbar/SnackBar";

describe("SnackBar component", () => {
  it("should render correctly", () => {
    render(<SnackBar>Hotkeys content</SnackBar>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Hotkeys content")).toBeInTheDocument();
  });
  it("should match the snapthot", () => {
    expect(render(<SnackBar>test</SnackBar>)).toMatchSnapshot();
  });
  it("should hide when pressing the close button", async () => {
    render(<SnackBar>test</SnackBar>);
    const closeButton = screen.getByTestId("snack-bar-close-btn");
    await closeButton.click();
    waitFor(() => {
      expect(screen.queryByTestId("snack-bar")).toBeNull();
    });
  });
});
