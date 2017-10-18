import mergeWith from 'lodash/mergeWith';

export default (state = {}, action) => {
  if (action.entities) {
    return mergeWith({}, state, action.entities, (objValue, srcValue) => {
      if (Array.isArray(srcValue)) {
        return srcValue;
      }
      return undefined;
    });
  }
  return state;
};
