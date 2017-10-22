import {put, take} from "redux-saga/effects";
import {randomDelay} from "./utils";

function* initApp() {
  yield take('APP_INIT');
  yield recipesFetch();
  yield put({type: 'APP_INIT_FINISHED'});
}

function* recipesFetch() {
  yield randomDelay(1000, 2000)
  // TODO - load using redux-api-middleware
}

export default function* rootSaga() {
  yield initApp()
  // TODO - set up loading recipes on demand
}
