import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const initialState = {
  entities: {
    recipes: {
      1: {
        id: 1,
        title: 'Młody jaś w pikantnym sosie pomidorowym',
        ingredients: ['pomidor', 'cebula', 'fasola jaś'],
      },
      2: {
        id: 2,
        title: 'Placki owsiane z jabłkami i gruszkami',
        ingredients: ['płatki owsiane', 'jabłko', 'gruszka'],
      },
      3: {
        id: 3,
        title: 'Cytrynowe ciasteczka',
        ingredients: ['mąka ryżowa', 'cytryna', 'jajka'],
      },

      4: {
        id: 4,
        title: 'Dynioburgery ',
        ingredients: ['pomidor', 'papryczka chili', 'sałata', 'ser żółty'],
      },
    },
  },
  recipes: [1, 2, 3, 4],
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
  ingredients: [],
};

const store = configureStore(initialState);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
