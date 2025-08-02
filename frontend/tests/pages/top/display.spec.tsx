import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, test } from "vitest";
import { Top } from "~/pages/top/page";

describe("トップページの表示テスト", () => {

	beforeEach(() => {
		render(
			<MemoryRouter>
				<Top />
			</MemoryRouter>
		);
	})

	describe("検索対象として選択できるアイコンの表示", () => {
		test("検索対象として選択できるアイコンが複数個表示されている", () => {
			const icons = screen.getByTestId("tcg-icons").getElementsByTagName("li");
			expect(icons).toHaveLength(3);
		})
	
		test("ヴァイスシュヴァルツのアイコンが表示されている", () => {
			const icon = screen.getByTestId("ws");
			const img = screen.getByTestId("ws-img");
	
			expect(icon).toBeInTheDocument();
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute("src", "/public/logo-ws.png");
		});
		
		test("遊戯王のアイコンが表示されている", () => {
			const icon = screen.getByTestId("ygo");
			const img = screen.getByTestId("ygo-img");
	
			expect(icon).toBeInTheDocument();
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute("src", "/public/logo-yugioh.png");
		});

		test("MTGのアイコンが表示されている", () => {
			const icon = screen.getByTestId("mtg");
			const img = screen.getByTestId("mtg-img");
	
			expect(icon).toBeInTheDocument();
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute("src", "/public/logo-mtg.png");
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

		test("検索テキスト入力欄には、テキストが入力できる", () => {
			expect(screen.queryByTestId("search-text")).not.toBeInTheDocument();

			const icons = screen.getByTestId("tcg-icons").getElementsByTagName("li");
			fireEvent.click(icons[0]);
			const input = screen.getByTestId("search-text");
			fireEvent.change(input, { target: { value: "test" } });
			expect(input).toHaveValue("test");
		})
	})
});
