import { normalize, schema } from 'normalizr';

const recipes = new schema.Entity('recipes', {}, { idAttribute: 'id' });
const recipesList = new schema.Array(recipes);
const actionsSchemas = {
  FETCH_RECIPES_SUCCESS: recipesList,
};

export const entitiesMiddleware = store => next => action => {
  const { type, payload } = action;
  const typeSchema = actionsSchemas[type]
  if (typeSchema) {
    const { result, entities } = normalize(payload, typeSchema);
    return next({ type, payload: result, entities });
  } else {
    return next({ type, payload });
  }
};
