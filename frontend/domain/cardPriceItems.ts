export interface CartPrices {
    items: CartPrice[];
}

export interface CartPrice {
    id: number;
    price: number;
    linkUrl: string;
}
