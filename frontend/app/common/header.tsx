export function Header() {
	return (
		<header className="bg-blue-600 text-white shadow-md" data-testid="header">
			<div className="container mx-auto px-4 py-3">
				<nav className="flex justify-between items-center">
					<h1 className="text-xl font-bold">
						<a href="/" className="hover:text-blue-200">Pricearch</a>
					</h1>
					<ul className="flex space-x-6" data-testid="header-nav">
						<li><a href="/" className="hover:text-blue-200">ホーム</a></li>
						<li><a href="/contact" className="hover:text-blue-200">お問い合わせ</a></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
