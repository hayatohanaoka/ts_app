export function Li({ classString, children, dataTestId, onClickHandler }: { classString?: string, children: React.ReactNode, dataTestId?: string, onClickHandler?: () => void }) {
	return (
		<li
			className={classString}
			data-testid={dataTestId}
			onClick={onClickHandler}
		>
			{children}
		</li>
	);
}
