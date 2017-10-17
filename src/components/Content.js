import React from 'react';
import RecipeList from '../containers/RecipeList';
import Basket from '../components/Basket';
import { Route } from 'react-router-dom';

const Content = props => {
  return (
    <div>
      <Route exact path="/" component={RecipeList} />
      <Route path="/basket/:recipeId" component={Basket} />
    </div>
  );
};

export default Content;
