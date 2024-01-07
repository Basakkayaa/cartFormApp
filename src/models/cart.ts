import { Product } from "./product";

export interface Cart {
    id: number;
    userId: number;
    objects: CartObject[];
}

export interface CartObject {
    cartId: number;
    productId: number;
    count: number;
    productName: string;
    productPrice: number;
}
