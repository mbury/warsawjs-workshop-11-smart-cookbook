import { random } from 'lodash';

export const delay = ms => new Promise(resolve => setTimeout(() => resolve(true), ms))
export const randomDelay = (min, max) => delay(random(min, max))
