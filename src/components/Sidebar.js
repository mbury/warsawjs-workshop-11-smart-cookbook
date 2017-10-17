import React from 'react';
import { Input, Header } from 'semantic-ui-react';
import IngredientsList from '../containers/IngredientsList';
const Home = props => {
  return (
    <div>
      <Header as="h3">Posiadane składniki: </Header>
      <Input icon="search" placeholder="Szukaj..." fluid />
      <IngredientsList />
    </div>
  );
};

export default Home;
