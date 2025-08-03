export function Ul({ children, dataTestId }: { children: React.ReactNode, dataTestId?: string }) {
	return (
        <ul className="grid grid-cols-3 gap-10 mx-auto p-8 max-w-6xl" data-testid={dataTestId}>
            {children}
        </ul>
	);
}
