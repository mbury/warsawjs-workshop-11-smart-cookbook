import React from 'react';
import IngredientsPrice from './IngredientsPrice';
import SelectedRecipe from '../components/SelectedRecipe';


export default ({ match }) =>
  <div>
    <IngredientsPrice id={match.params.recipeId} />
    <SelectedRecipe id={match.params.recipeId} />
  </div>
