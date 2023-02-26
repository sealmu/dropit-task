import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ICartProduct, ICartProductsMap } from "../types";

const useCartData = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.soldProducts,
  );

  const products: ICartProduct[] = [
    ...cartProducts.map((p) => {
      const prodTotal = p.product.price * p.quantity;
      return { ...p.product, quantity: p.quantity, total: prodTotal };
    }),
  ];

  const productsMap = products.reduce<ICartProductsMap<ICartProduct>>(
    (map, prod) => {
      map[prod.id] = prod;
      return map;
    },
    {},
  );

  let total = 0;
  if (products) {
    total = cartProducts.reduce((total, prod) => {
      const prodTotal = prod.product.price * prod.quantity;
      return total + prodTotal;
    }, 0);
  }

  const quantity = cartProducts ? cartProducts.length : 0;

  const getProductQuantityInCart = (id: number): number => {
    const prodInCart = productsMap[id];
    const inCartQuantity = prodInCart ? prodInCart.quantity : 0;

    return inCartQuantity;
  };

  return { products, total, quantity, productsMap, getProductQuantityInCart };
};

// exports
export default useCartData;
