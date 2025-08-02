import { useState } from "react";
import { Img } from "~/components/img";

export function Top() {
	const searchTargets = [
		{
			id: "ws",
			icon: "/public/logo-ws.png",
			alt: "ヴァイスシュヴァルツ",
			link: "/ws",
		},
		{
			id: "ygo",
			icon: "/public/logo-yugioh.png",
			alt: "遊戯王",
			link: "/yugioh",
		},
		{
			id: "mtg",
			icon: "/public/logo-mtg.png",
			alt: "MTG",
			link: "/mtg",
		},
	]

	const [selectedTarget, setSelectedTarget] = useState<string | null>(null);
	const iconClickHandler = (targetId: string) => setSelectedTarget(targetId);

	const [searchTexts, setSearchTexts] = useState<{ [key: string]: string }>({});
	const handleSearchTextChange = (text: string) => {
		if(selectedTarget) setSearchTexts(prev => ({...prev,[selectedTarget]: text}));
	}

	const currentSearchText = selectedTarget ? (searchTexts[selectedTarget] || "") : "";

	return (
		<div>
			<div className="flex justify-center items-center">
				<ul className="grid grid-cols-3 grid-rows-1 gap-10 mx-auto p-8 max-w-6xl" data-testid="tcg-icons">
					{searchTargets.map((searchTarget) => {
						const isSelected = selectedTarget === searchTarget.id;
						const baseClasses = "w-64 h-64 flex justify-center items-center overflow-hidden rounded-2xl border transition-colors cursor-pointer";
						const selectedClasses = isSelected
							? "bg-blue-100 border-blue-400 shadow-lg"
							: "border-gray-200 hover:border-gray-400 hover:bg-gray-50";

						return (
							<li
								key={searchTarget.id}
								className={`${baseClasses} ${selectedClasses}`}
								data-testid={searchTarget.id}
								onClick={() => iconClickHandler(searchTarget.id)}
							>
								<Img
									src={searchTarget.icon}
									alt={searchTarget.alt}
									dataTestId={`${searchTarget.id}-img`}
									className={`w-56 h-56 object-contain ${isSelected ? "opacity-100" : "opacity-50"}`}
								/>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="flex justify-center items-center mt-10">
			{
				selectedTarget ? (
					<textarea
						data-testid="search-text"
						value={currentSearchText}
						onChange={(e) => handleSearchTextChange(e.target.value)}
						placeholder={`${searchTargets.find(t => t.id === selectedTarget)?.alt}のカード名を入力してください...`}
						className="w-full max-w-2xl mx-auto block p-4 border border-gray-300 rounded-lg resize-none"
						rows={3}
					/>
				) : null
			}
			</div>
		</div>
	);
}

export default Top;
