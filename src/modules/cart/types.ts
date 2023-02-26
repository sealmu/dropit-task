import { CatalogProduct } from "../product/types";

export type ICart = { [id: number]: number };

export type ICartProductsMap<Item> = { [id: number]: Item };

export type ICartProduct = CatalogProduct & { quantity: number; total: number };
