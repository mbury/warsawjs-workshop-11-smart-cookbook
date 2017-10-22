import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getSelectedIngredients } from '../selectors'

const IngredientsList = ({ ingredients, onDelete }) => {
  return (
    <List animated verticalAlign="middle" divided relaxed={'very'}>
      {ingredients.map(item => (
        <List.Item key={item}>
          <List.Content floated="right">
            <Icon link name="delete" onClick={() => onDelete(item)} />
          </List.Content>
          <List.Content>{item}</List.Content>
        </List.Item>
      ))}
    </List>
  );
};

IngredientsList.defaultProps = {
  ingredients: [],
};

const mapStateToProps = (state, ownProps) => ({
  ingredients: getSelectedIngredients(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: name => dispatch({ type: 'DELETE_INGREDIENT', payload: name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsList);
