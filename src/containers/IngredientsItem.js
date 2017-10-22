import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getSelectedIngredients } from '../selectors'

const IngredientsItem = ({ name, isSelected, selectIngredient }) =>
  <Label
    color={isSelected ? 'green' : undefined}
    onClick={() => selectIngredient(name)}
    basic as="a">
    {isSelected && <Icon name="checkmark" />}
    {name}
  </Label>

const mapStateToProps = (state, ownProps) => ({
  isSelected: getSelectedIngredients(state).includes(ownProps.name),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectIngredient: name => dispatch({ type: 'SELECT_INGREDIENT', payload: name })
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsItem);
