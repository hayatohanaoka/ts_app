import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../app/welcome/welcome";
import "@testing-library/jest-dom";

test("renders Welcome component", () => {
    render(<Welcome />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
});
