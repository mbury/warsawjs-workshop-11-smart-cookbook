import { combineReducers } from 'redux';
import { mergeEntities } from './utils'
import uniq from 'lodash/uniq';

const recipes = (state = {order: [], entities: {}, loading: false}, action) => {
  switch (action.type) {
    case 'RECIPES_REFRESH':
      return {...state, loading: true}
    case 'FETCH_RECIPES_FAILURE':
      return {...state, loading: false}
    case 'FETCH_RECIPES_SUCCESS':
      return {
        order: [...action.payload],
        entities: mergeEntities(state.entities, action.entities.recipes),
        loading: false
      }
    default:
      return state;
  }
};

const isAppLoading = (state = false, action) => {
  switch (action.type) {
    case 'APP_INIT':
      return true;
    case 'APP_INIT_FINISHED':
      return false;
    default:
      return state;
  }
};

const selectedIngredients = (state = [], action) => {
  switch (action.type) {
    case 'DELETE_INGREDIENT':
      return state.filter(item => item !== action.payload);
    case 'ADD_INGREDIENT':
      return uniq([...state, action.payload]);
    case 'SELECT_INGREDIENT': {
      if (state.includes(action.payload)) {
        return state.filter(item => item !== action.payload);
      } else {
        return uniq([...state, action.payload]);
      }
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

const basket = (state = {}, action) => {
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
  shops,
  basket,
  selectedIngredients,
  isAppLoading,
});
