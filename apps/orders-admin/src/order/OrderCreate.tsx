import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="orderStatus" source="orderStatus" />
        <TextInput label="Product" source="product" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="totalPrice" source="totalPrice" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};
