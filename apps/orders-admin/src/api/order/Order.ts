export type Order = {
  createdAt: Date;
  id: string;
  orderStatus: string | null;
  product: string | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
  user: string | null;
};
