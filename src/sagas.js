import { take, put, select, fork, cancel, all } from 'redux-saga/effects';
import { random } from 'lodash';
import { CALL_API } from 'redux-api-middleware';

const getShops = state => state.shops;

const getRecipesList = () => ({
  [CALL_API]: {
    endpoint: '/api/recipes',
    method: 'GET',
    types: [
      'FETCH_RECIPES_REQUEST',
      'FETCH_RECIPES_SUCCESS',
      'FETCH_RECIPES_FAILURE',
    ],
  },
});

const getIngredients = ingredients =>
  ingredients.reduce((acc, item) => {
    const price = random(1, 42);
    return { ...acc, [item]: price };
  }, {});

export default function* rootSaga() {
  yield fork(recipesFetch);
  while (true) {
    const action = yield take('GET_BASKET_PRICE');
    yield fork(checkPrice, action.payload);
  }
}

function* recipesFetch() {
  while (true) {
    yield take(['APP_INIT', 'RECIPES_REFRESH']);
    const t = 1000 + random(100, 1500);
    yield delay(t);
    yield put(getRecipesList());
  }
}

function* checkPrice(ingredients) {
  const shops = yield select(getShops);
  const sagas = shops.map(item => {
    return fork(checkShop, item.id, ingredients);
  });
  const tasks = yield all(sagas);
  let finished = 0;
  while (finished < shops.length) {
    const action = yield take([
      'RECEIVE_SHOP_PRICE',
      'GET_BASKET_PRICE',
      'CLOSE_BASKET',
    ]);
    if (['GET_BASKET_PRICE', 'CLOSE_BASKET'].includes(action.type)) {
      finished = shops.length;
      yield all(tasks.map(task => task.isRunning() && cancel(task)));
    } else {
      finished++;
    }
  }
}

function* checkShop(shopId, ingredients) {
  const t = 1000 + random(100, 2500);
  yield delay(t);
  yield put({
    type: 'RECEIVE_SHOP_PRICE',
    payload: { [shopId]: getIngredients(ingredients) },
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms));
}
