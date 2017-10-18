import { createSelector } from 'reselect';
import { intersection, flatten, uniq, flow, sortBy } from 'lodash';

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

export const getMatchIngredients = createSelector(
  getIngredients,
  getRecipes,
  (ingredients, recipes) => {
    return recipes.reduce((acc, recipe) => {
      return {
        ...acc,
        [recipe.id]: intersection(recipe.ingredients, ingredients).length,
      };
    }, {});
  }
);

export const getFilteredRecipes = createSelector(
  getIngredients,
  getRecipes,
  getMatchIngredients,
  (ingredients, recipes, match) => {
    if (ingredients.length === 0) {
      return recipes;
    }
    return recipes
      .filter(recipe => {
        return match[recipe.id] > 0;
      })
      .sort((a, b) => {
        return match[a.id] < match[b.id];
      });
  }
);

export const getAllIngredients = createSelector(
  getIngredients,
  getRecipes,
  (ingredients, recipes) => {
    return flow([
      data =>
        data.map(item => {
          return item.ingredients;
        }),
      flatten,
      uniq,
      data =>
        data.filter(item => {
          return !ingredients.includes(item);
        }),
      sortBy,
    ])(recipes);
  }
);
