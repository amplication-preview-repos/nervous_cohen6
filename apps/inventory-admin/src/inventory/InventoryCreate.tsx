import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Product" source="product" />
        <NumberInput
          step={1}
          label="quantityAvailable"
          source="quantityAvailable"
        />
      </SimpleForm>
    </Create>
  );
};
