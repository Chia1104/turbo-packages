import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "@/app/counter";

describe("Get Started", () => {
  test("renders", () => {
    render(<Counter />);
    expect(screen.getByText(/Get Started/i)).toBeDefined();
  });
});