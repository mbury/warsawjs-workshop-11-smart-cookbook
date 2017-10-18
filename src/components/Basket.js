import React from 'react';
import { connect } from 'react-redux';
import { Message, Icon } from 'semantic-ui-react';

import IngredientsPrice from '../containers/IngredientsPrice';
import SelectedRecipe from './SelectedRecipe';

const IngredientsList = ({ match, isAppLoading }) => {
  return !isAppLoading ? (
    <div>
      <IngredientsPrice id={match.params.recipeId} />
      <SelectedRecipe id={match.params.recipeId} />
    </div>
  ) : (
    <Message icon>
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>Trawa ładowanie danych</Message.Header>
        Za chwilę zostanie wyświetlony koszyk wraz z wybranym przepisem
      </Message.Content>
    </Message>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isAppLoading: state.isAppLoading,
});
export default connect(mapStateToProps)(IngredientsList);
