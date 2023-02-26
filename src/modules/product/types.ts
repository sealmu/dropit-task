export interface CatalogProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

export interface SoldProduct {
  product: CatalogProduct;
  quantity: number;
}

export interface ProductDetails extends CatalogProduct {
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}
