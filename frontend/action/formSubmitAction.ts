"use server";

import type { CartPrice, CartPrices } from "../domain/cardPriceItems";

export class FormSubmitAction {
    static async execute(prevState: any, queryData: any): Promise<CartPrices> {
        const res = await fetch(`http://localhost:3001/api/v1/card-prices?q=${queryData.get("inputText")}`)
        const json: SummaryApiResponse = await res.json()
        return {
            items: json.items.map((item: any) => {
                return {
                    id: Number(item.id),
                    price: Number(item.price),
                    linkUrl: item.url
                } as CartPrice
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
