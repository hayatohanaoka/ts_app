export interface CartPriceItems {
    items: CartPriceItem[];
}

export interface CartPriceItem {
    id: number;
    price: number;
    linkUrl: string;
}
