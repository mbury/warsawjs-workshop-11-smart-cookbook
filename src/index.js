import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const initialState = {
  shops: [
    {
      id: 1,
      name: 'Wiedronka',
    },
    {
      id: 2,
      name: 'Didl',
    },
    {
      id: 3,
      name: 'Dżabka',
    },
  ],
};

const store = configureStore(initialState);
store.dispatch({ type: 'APP_INIT' });

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
