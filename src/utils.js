import { random } from 'lodash';
import mergeWith from 'lodash/mergeWith';

export const delay = ms => new Promise(resolve => setTimeout(() => resolve(true), ms))
export const randomDelay = (min, max) => delay(random(min, max))

export const mergeEntities = (oldEntities, newEntities) =>
  mergeWith({}, oldEntities, newEntities, (objValue, srcValue) => {
    if (Array.isArray(srcValue)) {
      return srcValue;
    }
    return undefined;
  });