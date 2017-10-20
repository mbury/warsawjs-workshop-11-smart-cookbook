import React from 'react';
import {
  Item,
  Header,
  Icon,
  Message,
  Segment,
  Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getFilteredRecipes } from '../selectors';

import RecipeItem from './RecipeItem';
import Counter from './Counter';

const withLoadingInfo = selector => WrappedComponent => {
  return props => {
    const isLoading = selector(props);
    return isLoading ? (
      <Message icon>
        <Icon name="circle notched" loading />
        <Message.Content>
          <Message.Header>Trawa ładowanie danych</Message.Header>
          Za chwilę zostanie wyświetlona lista dostępnych przepisów.
        </Message.Content>
      </Message>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

const RecipeList = ({ recipes, recipeRefresh }) => {
  return (
    <Counter>
      {(counter, plus, minus) => {
        return (
          <div>
            <Segment clearing vertical basic>
              <Button.Group basic floated="right">
                <Button onClick={minus} icon="minus" />
                <Button>limit: {counter}</Button>
                <Button onClick={plus} icon="plus" />
                <Button onClick={recipeRefresh} icon="refresh" />
              </Button.Group>
              <Header floated="left" as="h1">
                Dostępne przepisy:
              </Header>
            </Segment>
            <Item.Group divided>
              {recipes
                .slice(0, counter)
                .map(item => <RecipeItem key={item.id} id={item.id} />)}
            </Item.Group>
          </div>
        );
      }}
    </Counter>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  withLoadingInfo(props => props.isAppLoading)(RecipeList)
);
