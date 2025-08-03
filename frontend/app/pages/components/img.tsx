export function Img({ src, alt, dataTestId, className }: { src: string, alt?: string, dataTestId?: string, className?: string }) {
	return (
		<img
			src={src}
			alt={alt}
			data-testid={dataTestId}
			className={className || "max-w-full max-h-full object-contain"}
		/>
	)
}
