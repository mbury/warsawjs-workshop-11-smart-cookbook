import { normalize } from 'normalizr';
import { actionsMeta } from './schemas';

const middleware = store => next => action => {
  const { type, payload } = action;
  const types = Object.keys(actionsMeta);
  if (types.indexOf(type) >= 0) {
    const meta = actionsMeta[type];
    const { result, entities } = normalize(payload[meta.property], meta.schema);
    store.dispatch({ type: 'ENTITIES_RECEIVE', entities });
    return next({ type, payload: { ...payload, [meta.property]: result } });
  }
  return next(action);
};

export default middleware;
