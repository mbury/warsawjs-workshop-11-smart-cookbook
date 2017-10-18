import React from 'react';
import { Item, Header, Icon, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getFilteredRecipes } from '../selectors';

import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, recipeRefresh, isAppLoading }) => {
  return !isAppLoading ? (
    <div>
      <Header as="h1">
        <Icon onClick={recipeRefresh} link name="refresh" />
        Dostępne przepisy:
      </Header>
      <Item.Group divided>
        {recipes.map(item => <RecipeItem key={item.id} id={item.id} />)}
      </Item.Group>
    </div>
  ) : (
    <Message icon>
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>Trawa ładowanie danych</Message.Header>
        Za chwilę zostanie wyświetlona lista dostępnych przepisów.
      </Message.Content>
    </Message>
  );
};

RecipeList.defaultProps = {
  recipes: [],
};

const mapStateToProps = (state, ownProps) => ({
  recipes: getFilteredRecipes(state),
  isAppLoading: state.isAppLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  recipeRefresh: () => {
    dispatch({ type: 'RECIPES_REFRESH' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
