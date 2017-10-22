import React from 'react';
import RecipeList from '../containers/RecipeListView';
import BasketView from '../containers/BasketView';
import { Route } from 'react-router-dom';

const Content = props => {
  return (
    <div>
      <Route exact path="/" component={RecipeList} />
      <Route path="/basket/:recipeId" component={BasketView} />
    </div>
  );
};

export default Content;
