import React from "react";
import {Dropdown} from "semantic-ui-react";

export default ({ addIngredient, options = [] }) => {
  return (
    <div>
      <Dropdown
        placeholder="Szukaj"
        fluid
        search
        selection
        multiple
        closeOnChange
        onChange={(e, { value }) => {
          addIngredient(value[0]);
        }}
        value={[]}
        options={options}
      />
    </div>
  );
};
