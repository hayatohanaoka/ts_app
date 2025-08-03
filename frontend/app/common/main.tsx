export function Main({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex-1 container mx-auto px-4 py-6" data-testid="main-content">
			{children}
		</main>
	)
}
