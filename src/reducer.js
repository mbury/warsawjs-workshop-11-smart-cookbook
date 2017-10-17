import { combineReducers } from 'redux';
import { uniq } from 'lodash';

const recipes = (state = [], action) => {
  switch (action.type) {
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

const entities = (state = {}, action) => {
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
  recipes,
  ingredients,
  shops,
  price,
  entities,
});
