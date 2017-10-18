import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

const IngredientsItem = ({ name, isSelected, selectIngredient }) => {
  return (
    <Label
      color={isSelected ? 'green' : undefined}
      onClick={() => selectIngredient(name)}
      basic
      as="a"
    >
      {isSelected && <Icon name="checkmark" />}
      {name}
    </Label>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isSelected: state.ingredients.includes(ownProps.name),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectIngredient: name => {
    dispatch({ type: 'SELECT_INGREDIENT', payload: name });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsItem);
