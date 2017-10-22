import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getNotSelectedIngredients, getSelectedIngredients } from '../selectors';

const SearchIngredients = ({ addIngredient, options }) => {
  return (
    <div>
      <Dropdown
        placeholder="Szukaj"
        fluid
        search
        selection
        multiple
        closeOnChange
        onChange={(e, { value }) => {
          addIngredient(value[0]);
        }}
        value={[]}
        options={options}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  options: getNotSelectedIngredients(state).map(item => {
    return { key: item, value: item, text: item };
  }),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addIngredient: name => dispatch({ type: 'ADD_INGREDIENT', payload: name })
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIngredients);
