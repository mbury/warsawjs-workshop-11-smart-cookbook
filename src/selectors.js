import { createSelector } from 'reselect';
import { intersection } from 'lodash';

export const getIngredients = state => state.ingredients;
export const getRecipesOrder = state => state.recipes;
export const getRecipesEntities = state => state.entities.recipes;

export const getRecipes = createSelector(
  getRecipesOrder,
  getRecipesEntities,
  (order, entities) => {
    return order.map(id => {
      return entities[id];
    });
  }
);

export const getFilteredRecipes = createSelector(
  getIngredients,
  getRecipes,
  (ingredients, recipes) => {
    if (ingredients.length === 0) {
      return recipes;
    }
    return recipes.filter(recipe => {
      return intersection(recipe.ingredients, ingredients).length > 0;
    });
  }
);
