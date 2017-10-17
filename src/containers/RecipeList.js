import React from 'react';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getFilteredRecipes } from '../selectors';

import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, addIngredient }) => {
  return (
    <Item.Group divided>
      {recipes.map(item => (
        <RecipeItem key={item.id} id={item.id} addIngredient={addIngredient} />
      ))}
    </Item.Group>
  );
};

RecipeList.defaultProps = {
  recipes: [],
};

const mapStateToProps = (state, ownProps) => ({
  recipes: getFilteredRecipes(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addIngredient: name => {
    dispatch({ type: 'ADD_INGREDIENT', payload: name });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
