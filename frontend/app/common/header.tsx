export function Header() {
	// 共通スタイルクラス
	const containerClass = "container mx-auto px-4";
	const flexBetween = "flex justify-between items-center";
	const linkHover = "hover:text-blue-200";

	return (
		<header className="bg-blue-600 text-white shadow-md" data-testid="header">
			<div className={`${containerClass} py-3`}>
				<nav className={flexBetween}>
					<h1 className="text-xl font-bold">
						<a href="/" className={linkHover}>Pricearch</a>
					</h1>
					<ul className="flex space-x-6" data-testid="header-nav">
						<li><a href="/" className={linkHover}>ホーム</a></li>
						<li><a href="/contact" className={linkHover}>お問い合わせ</a></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
