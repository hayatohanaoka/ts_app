export function Footer() {
	return (
		<footer className="bg-gray-800 text-white mt-auto" data-testid="footer">
			<div className="container mx-auto px-4 py-6">
				<div className="text-center">
					<p data-testid="footer-copyright">&copy; 2024 Pricearch. All rights reserved.</p>
					<div className="mt-2 space-x-4" data-testid="footer-links">
						<a href="/privacy" className="text-gray-300 hover:text-white">プライバシーポリシー</a>
						<a href="/terms" className="text-gray-300 hover:text-white">利用規約</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
