import React from 'react';
import { Label } from 'semantic-ui-react';
import IngredientsItem from './../containers/IngredientsItem';

const IngredientsList = ({ ingredients }) => {
  return (
    <Label.Group>
      {ingredients.map(ingredient => (
        <IngredientsItem name={ingredient} key={ingredient} />
      ))}
    </Label.Group>
  );
};

IngredientsList.defaultProps = {
  ingredients: [],
};

export default IngredientsList;
