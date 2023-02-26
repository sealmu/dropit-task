export interface TableColumn<Item> {
  key: keyof Item | string;
  title: string;
  width?: number;
  renderCell: (item: Item) => JSX.Element;
  getValue: (item: Item) => unknown;
}

export type GetKeyRow<Item> = (item: Item) => string;

export type GetCartQuantity<Item> = (item: Item) => number;
