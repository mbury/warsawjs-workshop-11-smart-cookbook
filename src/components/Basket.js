import React from 'react';

import IngredientsPrice from '../containers/IngredientsPrice';
import SelectedRecipe from './SelectedRecipe';

const IngredientsList = ({ match }) => {
  return (
    <div>
      <IngredientsPrice id={match.params.recipeId} />
      <SelectedRecipe id={match.params.recipeId} />
    </div>
  );
};

IngredientsList.defaultProps = {};

export default IngredientsList;
