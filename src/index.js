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
  recipes: {
    order: [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    entities: {
      '1': {
        id: 1,
        title: 'Młody jaś w pikantnym sosie pomidorowym',
        ingredients: [
          'pomidor',
          'cebula',
          'fasola jaś',
          'czosnek',
          'kiełbasa chorizo',
          'papryka',
          'papryczka chili'
        ]
      },
      '2': {
        id: 2,
        title: 'Placki owsiane z jabłkami i gruszkami',
        ingredients: [
          'płatki owsiane',
          'jabłko',
          'gruszka',
          'mleko',
          'jajko',
          'mąka orkiszowa'
        ]
      },
      '3': {
        id: 3,
        title: 'Cytrynowe ciasteczka',
        ingredients: [
          'mąka ryżowa',
          'cytryna',
          'jajka',
          'masło',
          'cukier'
        ]
      },
      '4': {
        id: 4,
        title: 'Dynioburgery',
        ingredients: [
          'pomidor',
          'papryczka chili',
          'sałata',
          'ser żółty',
          'soczewica',
          'dynia'
        ]
      },
      '5': {
        id: 5,
        title: 'Risotto z chorizo, oliwkami i suszonymi pomidorami',
        ingredients: [
          'ryż',
          'kiełbasa chorizo',
          'suszone pomidory',
          'cebula',
          'ser parmezan',
          'oliwki'
        ]
      },
      '6': {
        id: 6,
        title: 'Muffinki owsiane z borówkami',
        ingredients: [
          'borówka',
          'płatki owsiane',
          'jajko',
          'banany',
          'mleko',
          'mąka orkiszowa'
        ]
      },
      '7': {
        id: 7,
        title: 'Makaron z kurkami i trzema serami',
        ingredients: [
          'kurkami',
          'czosnek',
          'ser mascarpone',
          'makaron',
          'masło',
          'ser parmezan',
          'ser kozi'
        ]
      }
    },
    loading: false
  },
};

const store = configureStore(initialState);
store.dispatch({ type: 'APP_INIT' });

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
