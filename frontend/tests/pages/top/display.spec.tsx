import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { Top } from "~/pages/top/page";


describe("トップページの表示テスト", () => {

	beforeEach(() => {
		render(
			<MemoryRouter>
				<Top />
			</MemoryRouter>
		);
	})

	describe("検索対象として選択できるアイコンの挙動", () => {
		test("検索対象として選択できるアイコンが複数個表示されている", () => {
			const icons = screen.getByTestId("tcg-icons").getElementsByTagName("li");
			expect(icons).toHaveLength(3);
		})
	
		test("ヴァイスシュヴァルツのアイコンが表示されている", () => {
			const icon = screen.getByTestId("ws");
			const img = screen.getByTestId("ws-img");
	
			expect(icon).toBeInTheDocument();
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute("src", "logo-ws.png");
		});
		
		test("遊戯王のアイコンが表示されている", () => {
			const icon = screen.getByTestId("ygo");
			const img = screen.getByTestId("ygo-img");
	
			expect(icon).toBeInTheDocument();
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute("src", "logo-yugioh.png");
		});

		test("MTGのアイコンが表示されている", () => {
			const icon = screen.getByTestId("mtg");
			const img = screen.getByTestId("mtg-img");
	
			expect(icon).toBeInTheDocument();
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute("src", "logo-mtg.png");
		});
	})

	describe("検索対象として選択できるアイコンをクリックした際の挙動", () => {
		test("任意のアイコンをクリックすると、検索テキスト入力欄が現れる", () => {
			expect(screen.queryByTestId("search-text")).not.toBeInTheDocument();
			const icons = screen.getByTestId("tcg-icons").getElementsByTagName("li");
			for(let i = 0; i < icons.length; i++) {
				fireEvent.click(icons[i]);
				expect(screen.getByTestId("search-text")).toBeInTheDocument();
			}
		})
		
	})
	
	describe("検索テキスト入力欄の挙動", () => {

		beforeEach(() => {
			const icons = screen.getByTestId("tcg-icons").getElementsByTagName("li");
			fireEvent.click(icons[0]);
		})

		test("検索テキスト入力欄には、テキストが入力できる", () => {
			const input = screen.getByTestId("search-text");
			const expectedText = "test";

			fireEvent.change(input, { target: { value: expectedText } });
			expect(input).toHaveValue(expectedText);
		})
		
		test("検索対象のアイコンを変更した後でも、入力内容が保持されている", () => {
			const input = screen.getByTestId("search-text");
			const expectedText = "test";
			fireEvent.change(input, { target: { value: expectedText } });

			const icons = screen.getByTestId("tcg-icons").getElementsByTagName("li");
			fireEvent.click(icons[1]);
			expect(input).toHaveValue("");

			fireEvent.click(icons[0]);
			expect(input).toHaveValue(expectedText);
		})
	})

	describe("検索フォームの挙動", () => {

		beforeEach(() => {
			vi.clearAllMocks();
			
			vi.mock("../../../action/formSubmitAction", () => ({
				FormSubmitAction: {
					execute: vi.fn().mockReturnValue({
						items: [
							{ id: 1, price: 1000, linkUrl: "https://example-1.com" },
							{ id: 2, price: 2000, linkUrl: "https://example-2.com" }
						]
					})
				}
			}));

			const icons = screen.getByTestId("tcg-icons").getElementsByTagName("li");
			fireEvent.click(icons[0]);
		})

		test("検索テキスト入力欄に入力してボタンをクリックすると、検索された内容が表示される", async () => {
			const input = screen.getByTestId("search-text");
			const expectedText = "test";
			fireEvent.change(input, { target: { value: expectedText } });

			const button = screen.getByTestId("submit-button");
			fireEvent.click(button);

			const items = screen.getByTestId("search-items").getElementsByTagName("li");
			expect(items).toHaveLength(2);
		})
	})
});
