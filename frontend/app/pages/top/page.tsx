"use client";

import { useActionState, useState } from "react";
import { Img } from "~/pages/components/img";
import { Ul } from "../components/ul";
import { Li } from "../components/li";
import { FormSubmitAction } from "../../../action/formSubmitAction";

export function Top() {
	const searchTargets = [
		{
			id: "ws",
			icon: "logo-ws.png",
			alt: "ヴァイスシュヴァルツ",
			link: "/ws",
		},
		{
			id: "ygo",
			icon: "logo-yugioh.png",
			alt: "遊戯王",
			link: "/yugioh",
		},
		{
			id: "mtg",
			icon: "logo-mtg.png",
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

	const [state, submitAction, isPending] = useActionState(FormSubmitAction.execute, { items: [] });

	// 共通スタイルクラスを定義
	const flexCenter = "flex justify-center items-center";
	const cardBase = "w-64 h-64 overflow-hidden rounded-2xl border transition-colors cursor-pointer";
	const smallCardBase = "w-64 h-8 overflow-hidden rounded-2xl border transition-colors cursor-pointer";
	const cardSelected = "bg-blue-100 border-blue-400 shadow-lg";
	const cardDefault = "border-gray-200 hover:border-gray-400 hover:bg-gray-50";
	const textareaClass = "w-150 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
	const buttonBase = "px-6 py-3 rounded-lg transition-colors h-fit";
	const buttonPrimary = "bg-blue-500 text-white hover:bg-blue-600";
	const buttonDisabled = "disabled:bg-gray-400 disabled:cursor-not-allowed";

	return (
		<div className={`flex flex-col ${flexCenter}`}>
			<div>
				<Ul dataTestId="tcg-icons">
					{searchTargets && searchTargets.map((searchTarget, index) => {
						const isSelected = selectedTarget === searchTarget.id;
						const selectedClasses = isSelected ? cardSelected : cardDefault;

						return (
							<Li
								key={index.toString()}
								classString={`${cardBase} ${flexCenter} ${selectedClasses}`}
								dataTestId={searchTarget.id}
								onClickHandler={() => iconClickHandler(searchTarget.id)}
							>
								<Img
									src={searchTarget.icon}
									alt={searchTarget.alt}
									dataTestId={`${searchTarget.id}-img`}
									className={`w-56 h-56 object-contain ${isSelected ? "opacity-100" : "opacity-50"}`}
								/>
							</Li>
						)
					})}
				</Ul>
			</div>
			<div className="mt-10 px-4">
			{
				selectedTarget ? (
					<form action={submitAction}>
						<div className={`${flexCenter} gap-4`}>
							<textarea
								name="inputText"
								disabled={isPending}
								data-testid="search-text"
								value={currentSearchText}
								onChange={(e) => handleSearchTextChange(e.target.value)}
								placeholder={`${searchTargets.find(t => t.id === selectedTarget)?.alt}のカード名を入力してください...`}
								rows={1}
								className={textareaClass}
							/>
							<button 
								type="submit" 
								data-testid="submit-button"
								disabled={isPending || !currentSearchText.trim()}
								className={`${buttonBase} ${buttonPrimary} ${buttonDisabled}`}
							>
								{isPending ? (
									<div className={`${flexCenter} space-x-2`}>
										<div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-transparent"></div>
										<span>検索中...</span>
									</div>
								) : (
									<div className={`${flexCenter} space-x-2`}>
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
										</svg>
										<span>検索</span>
									</div>
								)}
							</button>
						</div>
					</form>
				) : null
			}
			</div>
			<div>
				<Ul dataTestId="search-items">
					{state && state.items.map((item) => {
						return (
							<Li key={item.id.toString()} classString={smallCardBase}>
								<a href={item.linkUrl} target="_blank">{item.price}</a>
							</Li>
						)
					})}
				</Ul>
			</div>
		</div>
	);
}

export default Top;
