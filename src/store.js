import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './sagas';

import { apiMiddleware } from 'redux-api-middleware';
import { entitiesMiddleware } from './middlewares';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [apiMiddleware, entitiesMiddleware, sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const shouldLoadDevTools =
  window.devToolsExtension && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension()
    : f => f;

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    shouldLoadDevTools
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
