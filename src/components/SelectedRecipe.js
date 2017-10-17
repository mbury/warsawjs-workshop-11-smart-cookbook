import React from 'react';
import { Item, Header, Segment } from 'semantic-ui-react';
import RecipeItem from '../containers/RecipeItem';

const SelectedRecipe = ({ id }) => {
  return (
    <Segment basic vertical>
      <Header as="h3">Wybrany przepis:</Header>
      <Item.Group>
        <RecipeItem selected id={id} />
      </Item.Group>
    </Segment>
  );
};

export default SelectedRecipe;
