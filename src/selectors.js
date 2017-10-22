import { createSelector } from 'reselect';
import { intersection, flatten, uniq, flow, sortBy } from 'lodash';

export const getShops = state => state.shops;
export const getSelectedIngredients = state => state.selectedIngredients;
export const getRecipesOrder = state => state.recipes.order;
export const getRecipesEntities = state => state.recipes.entities;
export const getBasket = state => state.basket;
export const isAppLoading = state => state.isAppLoading;
export const isRecipesLoading = state => isAppLoading(state) || state.recipes.loading

export const getRecipes = createSelector(
  getRecipesOrder,
  getRecipesEntities,
  (order, entities) => order.map(id => entities[id])
);

export const getMatchIngredients = createSelector(
  getSelectedIngredients,
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
  getSelectedIngredients,
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
  getRecipes,
  flow([
    data => data.map(item => item.ingredients),
    flatten,
    uniq,
    sortBy,
  ])
);

export const getNotSelectedIngredients = createSelector(
  getSelectedIngredients,
  getAllIngredients,
  (selectedIngredients, allIngredients) =>
    allIngredients.filter(item =>
      !selectedIngredients.includes(item))
)