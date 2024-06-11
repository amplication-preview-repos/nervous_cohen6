export type OrderCreateInput = {
  orderStatus?: string | null;
  product?: string | null;
  quantity?: number | null;
  totalPrice?: number | null;
  user?: string | null;
};
