import { take, put, select, fork, cancel, all } from 'redux-saga/effects';
import { random } from 'lodash';

const getShops = state => state.shops;

const recipes = [
  {
    id: 1,
    title: 'Młody jaś w pikantnym sosie pomidorowym',
    ingredients: ['pomidor', 'cebula', 'fasola jaś'],
  },
  {
    id: 2,
    title: 'Placki owsiane z jabłkami i gruszkami',
    ingredients: ['płatki owsiane', 'jabłko', 'gruszka'],
  },
  {
    id: 3,
    title: 'Cytrynowe ciasteczka',
    ingredients: ['mąka ryżowa', 'cytryna', 'jajka'],
  },
  {
    id: 4,
    title: 'Dynioburgery',
    ingredients: ['pomidor', 'papryczka chili', 'sałata', 'ser żółty'],
  },
  {
    id: 5,
    title: 'Risotto z chorizo, oliwkami i suszonymi pomidorami',
    ingredients: [
      'kiełbasa chorizo',
      'suszone pomidoryw',
      'cebula',
      'ser parmezan',
    ],
  },
];
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
    yield put({
      type: 'FETCH_RECIPES_SUCCESS',
      payload: { data: recipes },
    });
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
