import { combineReducers } from 'redux';
import uniq from 'lodash/uniq';
import mergeWith from 'lodash/mergeWith';

const recipesOrder = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RECIPES_SUCCESS':
      return [...action.payload];
    default:
      return state;
  }
};

const entities = (state = {}, action) => {
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

const isAppLoading = (state = false, action) => {
  switch (action.type) {
    case 'APP_INIT':
      return true;
    case 'FETCH_RECIPES_SUCCESS':
      return false;
    default:
      return state;
  }
};

const ingredients = (state = [], action) => {
  switch (action.type) {
    case 'DELETE_INGREDIENT':
      return state.filter(item => item !== action.payload);
    case 'ADD_INGREDIENT':
      return uniq([...state, action.payload]);
    case 'SELECT_INGREDIENT': {
      if (state.includes(action.payload)) {
        return state.filter(item => item !== action.payload);
      }
      return uniq([...state, action.payload]);
    }
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

const price = (state = {}, action) => {
  switch (action.type) {
    case 'GET_BASKET_PRICE':
      return {};
    case 'RECEIVE_SHOP_PRICE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  recipesOrder,
  ingredients,
  shops,
  price,
  entities,
  isAppLoading,
});
