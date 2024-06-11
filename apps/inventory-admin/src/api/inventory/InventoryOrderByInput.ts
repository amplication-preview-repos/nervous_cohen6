import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  product?: SortOrder;
  quantityAvailable?: SortOrder;
  updatedAt?: SortOrder;
};
