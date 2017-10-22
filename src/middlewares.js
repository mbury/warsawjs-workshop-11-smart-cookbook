import { schema } from 'normalizr';

const recipes = new schema.Entity('recipes', {}, { idAttribute: 'id' });
const recipesList = new schema.Array(recipes);
const actionsSchemas = {
  FETCH_RECIPES_SUCCESS: recipesList,
};

export const entitiesMiddleware = store => next => action => {
  // TODO - use normalizr to extract entities and order
  return next(action);
};
