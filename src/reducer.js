import { combineReducers } from 'redux';
import { mergeEntities } from './utils'
import uniq from 'lodash/uniq';

const recipes = (state = {order: [], entities: {}, loading: false}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const isAppLoading = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const selectedIngredients = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const shops = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const basket = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  recipes,
  shops,
  basket,
  selectedIngredients,
  isAppLoading,
});
