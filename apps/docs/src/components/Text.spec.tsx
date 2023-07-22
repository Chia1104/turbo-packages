import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  test("renders", () => {
    render(<Text />);
    expect(screen.getByText(/Text/i)).toBeDefined();
  });
});