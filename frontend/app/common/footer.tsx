export function Footer() {
	// 共通スタイルクラス
	const containerClass = "container mx-auto px-4";
	const linkClass = "text-gray-300 hover:text-white";

	return (
		<footer className="bg-gray-800 text-white mt-auto" data-testid="footer">
			<div className={`${containerClass} py-6`}>
				<div className="text-center">
					<p data-testid="footer-copyright">&copy; 2024 Pricearch. All rights reserved.</p>
					<div className="mt-2 space-x-4" data-testid="footer-links">
						<a href="/privacy" className={linkClass}>プライバシーポリシー</a>
						<a href="/terms" className={linkClass}>利用規約</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
