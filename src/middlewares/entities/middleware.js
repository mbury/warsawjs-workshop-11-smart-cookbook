import { normalize } from 'normalizr';
import { actionsMeta } from './schemas';

const middleware = store => next => action => {
  const { type, payload } = action;
  const types = Object.keys(actionsMeta);
  if (types.indexOf(type) >= 0) {
    const { property, schema } = actionsMeta[type];
    const data = property ? payload[property] : payload;
    const { result, entities } = normalize(data, schema);
    store.dispatch({ type: 'ENTITIES_RECEIVE', entities });
    const content = property ? { ...payload, [property]: result } : result;
    return next({ type, payload: content });
  }
  return next(action);
};

export default middleware;
