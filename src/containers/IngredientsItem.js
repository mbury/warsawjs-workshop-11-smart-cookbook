import React from 'react';
import { Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

const IngredientsItem = ({ name, isSelected, addIngredient, price }) => {
  return (
    <Label
      color={isSelected ? 'green' : undefined}
      onClick={() => addIngredient(name)}
      basic
      as="a"
    >
      {name}
      {price && <Label.Detail>{price} zł</Label.Detail>}
    </Label>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isSelected: state.ingredients.includes(ownProps.name),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addIngredient: name => {
    dispatch({ type: 'SELECT_INGREDIENT', payload: name });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsItem);
