import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Content } from "~/common/content";
import { Footer } from "~/common/footer";
import { Header } from "~/common/header";

describe("共通パーツの表示テスト", () => {
  describe("ヘッダー", () => {
    test("ヘッダーが表示される", () => {
      render(
        <Header />
      );

      // ヘッダーの存在確認
      const header = screen.getByTestId("header");
      expect(header).toBeInTheDocument();
    });

    test("ロゴ「Pricearch」が表示される", () => {
      render(
        <Header />
      );

      const logo = screen.getByText("Pricearch");
      expect(logo).toBeInTheDocument();
      expect(logo.closest("a")).toHaveAttribute("href", "/");
    });

    test("ナビゲーションメニューが表示される", () => {
      render(
        <Header />
      );

      // ナビゲーションリンクの確認
      const nav = screen.getByTestId("header-nav");
      expect(nav).toBeInTheDocument();
      expect(nav.children).toHaveLength(2);
      expect(nav.children[0].textContent).toBe("ホーム");
      expect(nav.children[1].textContent).toBe("お問い合わせ");
    });

    test("ナビゲーションリンクが正しいhrefを持つ", () => {
      render(
        <Header />
      );

      const nav = screen.getByTestId("header-nav");
      const homeLink = nav.children[0].querySelector("a");
      const contactLink = nav.children[1].querySelector("a");

      expect(homeLink).toHaveAttribute("href", "/");
      expect(contactLink).toHaveAttribute("href", "/contact");
    });
  });

  describe("メインコンテンツエリア", () => {
    test("メインコンテンツが表示される", () => {
      render(
        <Content>
          <div>test contents</div>
        </Content>
      );

      const main = screen.getByTestId("main-content");
      expect(main).toBeInTheDocument();

      expect(screen.getByText(testContent)).toBeInTheDocument();
    });
  });

  describe("フッター", () => {
    test("フッターが表示される", () => {
      render(
        <Footer />
      );

      // フッターの存在確認
      const footer = screen.getByTestId("footer");
      expect(footer).toBeInTheDocument();
    });

    test("コピーライトが表示される", () => {
      render(
        <Footer />
      );

      expect(screen.getByTestId("footer-copyright")).toBeInTheDocument();
      expect(screen.getByText(/© 2024 Pricearch. All rights reserved./)).toBeInTheDocument();
    });

    test("フッターリンクが表示される", () => {
      render(
        <Footer />
      );

      const links = screen.getByTestId("footer-links");
      expect(links).toBeInTheDocument();
      expect(links.children).toHaveLength(2);
      expect(links.children[0].textContent).toBe("プライバシーポリシー");
      expect(links.children[1].textContent).toBe("利用規約");
    });

    test("フッターリンクが正しいhrefを持つ", () => {
      render(
        <Footer />
      );

      const links = screen.getByTestId("footer-links");
      const privacyLink = links.querySelector("a[href='/privacy']");
      const termsLink = links.querySelector("a[href='/terms']");

      expect(privacyLink).toBeInTheDocument();
      expect(termsLink).toBeInTheDocument();
    });
  });
});