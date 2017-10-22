import React from 'react';
import { connect } from 'react-redux';
import withLoadingInfo from './LoadingInfo'
import IngredientsPrice from './IngredientsPrice';
import SelectedRecipe from '../components/SelectedRecipe';
import { isAppLoading } from '../selectors'

const IngredientsList = ({ match }) =>
  <div>
    <IngredientsPrice id={match.params.recipeId} />
    <SelectedRecipe id={match.params.recipeId} />
  </div>

const mapStateToProps = (state, ownProps) => ({
  isAppLoading: isAppLoading(state),
});

const loadingMessage = 'Za chwilę zostanie wyświetlony koszyk wraz z wybranym przepisem';
export default connect(mapStateToProps)(
  withLoadingInfo({message: loadingMessage, selector: props => props.isAppLoading })(IngredientsList)
);
