const getPageConfig = (mode: "products" | "cart" = "products") => {
  switch (mode) {
    case "products":
      return {
        title: "Catalog Page",
      };
    case "cart":
      return {
        title: "Cart Page",
      };
  }
};

export default getPageConfig;
