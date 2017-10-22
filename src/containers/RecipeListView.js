import React from 'react';
import { connect } from 'react-redux';
import { getFilteredRecipes, isRecipesLoading } from '../selectors';
import RecipeItem from './RecipeItem';
import Counter from './Counter';
import withLoadingInfo from './LoadingInfo'
import {
  Item,
  Header,
  Segment,
  Button,
} from 'semantic-ui-react';

const RecipeList = ({ recipes, recipeRefresh }) =>
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

RecipeList.defaultProps = {
  recipes: [],
};

const mapStateToProps = (state, ownProps) => ({
  recipes: getFilteredRecipes(state),
  isLoading: isRecipesLoading(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  recipeRefresh: () => dispatch({ type: 'RECIPES_REFRESH' }),
});

const loadingMessage = 'Za chwilę zostanie wyświetlona lista dostępnych przepisów.'
export default connect(mapStateToProps, mapDispatchToProps)(
  withLoadingInfo({loadingMessage, selector: props => props.isLoading})(RecipeList)
);
