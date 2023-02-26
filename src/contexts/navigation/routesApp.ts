interface GetProductProps {
  productId: string;
}

const routesApp = {
  getHome: () => "/",
  getCatalog: () => `/catalog`,
  getProduct: ({ productId }: GetProductProps) => `/catalog/${productId}`,
  getCart: () => `/cart`,
};

export default routesApp;
