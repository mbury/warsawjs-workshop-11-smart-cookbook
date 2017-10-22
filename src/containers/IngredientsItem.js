import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

export default ({ name, isSelected, selectIngredient }) =>
  <Label
    color={isSelected ? 'green' : undefined}
    onClick={() => selectIngredient(name)}
    basic as="a">
    {isSelected && <Icon name="checkmark" />}
    {name}
  </Label>
