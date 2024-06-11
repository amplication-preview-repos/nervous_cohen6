import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="orderStatus" source="orderStatus" />
        <TextInput label="Product" source="product" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="totalPrice" source="totalPrice" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};
