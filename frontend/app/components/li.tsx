export function Li({ children, dataTestId }: { children: React.ReactNode, dataTestId?: string }) {
	return (
		<li className="w-64 h-64 flex justify-center items-center overflow-hidden rounded-2xl border border-gray-200 hover:border-gray-400 transition-colors" data-testid={dataTestId}>
			{children}
		</li>
	);
}
