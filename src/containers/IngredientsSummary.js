import React from 'react';
import { connect } from 'react-redux';

import { getMatchIngredients } from '../selectors';

const IngredientsSummary = ({ matchIngredients, ingredients = [] }) => {
  return (
    <span>
      pasujących składników: {matchIngredients} z {ingredients.length}
    </span>
  );
};

const mapStateToProps = (state, ownProps) => {
  const matchIngredients = getMatchIngredients(state);
  return {
    matchIngredients: matchIngredients[ownProps.id] || 0,
  };
};

export default connect(mapStateToProps)(IngredientsSummary);
