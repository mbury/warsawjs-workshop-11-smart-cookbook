import React from 'react';
import { Header } from 'semantic-ui-react';

import SelectedIngredients from '../containers/SelectedIngredients';
import SearchIngredients from '../containers/SearchIngredients';

const Home = props => {
  return (
    <div>
      <Header as="h3">Posiadane składniki: </Header>
      <SearchIngredients />
      <SelectedIngredients />
    </div>
  );
};

export default Home;
