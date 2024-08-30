import { describe, it, expect } from "vitest";
import { aggInvoices } from "./utils";
import { InvoicesTransformed, ValueType } from "@/types";

/**
 * using a partial + combined with the type alias
 * because we are only returning the sum of couple of fields
 * so we can safely ignore the rest of the object `InvoicesTransformed`
 * and only mock the portion this function is using
 */
const mockInvoices: Partial<InvoicesTransformed>[] = [
  { total_margin: 100, total_invoice: 500 },
  { total_margin: 150, total_invoice: 300 },
  { total_margin: 200, total_invoice: 400 },
];

describe("aggInvoices utility function", () => {
  it('should correctly aggregate total_margin when valueType is "margin"', () => {
    const result = aggInvoices(
      mockInvoices as InvoicesTransformed[],
      "margin" as ValueType
    );
    expect(result).toBe(450);
  });

  it('should correctly aggregate total_invoice when valueType is "revenue"', () => {
    const result = aggInvoices(
      mockInvoices as InvoicesTransformed[],
      "revenue" as ValueType
    );
    expect(result).toBe(1200);
  });

  it("should return 0 when data array is empty", () => {
    const result = aggInvoices([], "revenue" as ValueType);
    expect(result).toBe(0);
  });
});
