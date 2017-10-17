import { take, put, select, fork, cancel, all } from 'redux-saga/effects';
import { random } from 'lodash';

const getShops = state => state.shops;

const getIngredients = ingredients =>
  ingredients.reduce((acc, item) => {
    const price = random(1, 42);
    return { ...acc, [item]: price };
  }, {});

export default function* rootSaga() {
  while (true) {
    const action = yield take('GET_BASKET_PRICE');
    yield fork(checkPrice, action.payload);
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
    const action = yield take(['RECEIVE_SHOP_PRICE', 'GET_BASKET_PRICE']);
    if (action.type === 'GET_BASKET_PRICE') {
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
