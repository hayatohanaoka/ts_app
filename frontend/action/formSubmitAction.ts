"use server";

import type { CartPriceItem, CartPriceItems } from "../domain/cardPriceItems";

export class FormSubmitAction {
    static async execute(prevState: any, queryData: any): Promise<CartPriceItems> {
        const res = await fetch(`http://localhost:3001/api/v1/summary?q=${queryData.get("inputText")}`)
        const json: SummaryApiResponse = await res.json()
        return {
            items: json.items.map((item: any, index: number) => {
                return {
                    id: Number(item.id),
                    price: Number(item.price),
                    linkUrl: item.url
                } as CartPriceItem
            })
        }
    }
}

interface SummaryApiResponse {
    items: {
        id: string
        price: number
        url: string
    }[]
}
