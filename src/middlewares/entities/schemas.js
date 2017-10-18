import { schema } from 'normalizr';

const recipes = new schema.Entity('recipes', {}, { idAttribute: 'id' });
const recipesList = new schema.Array(recipes);

export const actionsMeta = {
  FETCH_RECIPES_SUCCESS: { property: 'data', schema: recipesList },
};
