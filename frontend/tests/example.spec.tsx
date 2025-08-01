import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../app/welcome/welcome";
import "@testing-library/jest-dom";

test("renders Welcome component", () => {
	render(<Welcome />);
	expect(screen.getByText("Hello")).toBeInTheDocument();
});

test("test msw", async () => {
	const response = await fetch('https://api.example.com/user')

	await expect(response.json()).resolves.toEqual({
		id: 'abc-123',
		firstName: 'John',
		lastName: 'Maverick',
	})
})
