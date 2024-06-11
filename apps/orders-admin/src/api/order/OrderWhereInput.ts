import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  orderStatus?: StringNullableFilter;
  product?: StringNullableFilter;
  quantity?: IntNullableFilter;
  totalPrice?: FloatNullableFilter;
  user?: StringNullableFilter;
};
