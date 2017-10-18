import React from 'react';

import IngredientsItem from './../containers/IngredientsItem';

const IngredientsList = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map(ingredient => (
        <IngredientsItem name={ingredient} key={ingredient} />
      ))}
    </div>
  );
};

IngredientsList.defaultProps = {
  ingredients: [],
};

export default IngredientsList;
