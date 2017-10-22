import React from 'react';
import find from 'lodash/find'
import { Icon, Header, Table, Button, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduce } from 'lodash';
import { getSelectedIngredients, getRecipes, getShops, getBasket } from '../selectors'

class IngredientsPrice extends React.Component {
  componentDidMount() {
    const { getBasketPrice, recipeIngredients } = this.props;
    getBasketPrice(recipeIngredients);
  }
  componentWillUnmount() {
    const { closeBasket } = this.props;
    closeBasket();
  }
  getShopPrice(id) {
    const { price, missingIngredients } = this.props;
    return reduce(
      price[id],
      (acc, value, key) => {
        if (missingIngredients.includes(key)) {
          return acc + value;
        }
        return acc;
      },
      0
    );
  }
  render() {
    const {
      shops,
      price,
      recipeIngredients,
      getBasketPrice,
      missingIngredients,
    } = this.props;
    return (
      <div>
        <Header as="h1">Szacowany koszt przygotowania: </Header>
        <Table basic celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Sklep</Table.HeaderCell>
              <Table.HeaderCell>Koszt brakujących składników</Table.HeaderCell>
              <Table.HeaderCell>Łącznie</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {shops.map(shop => (
              <Table.Row key={shop.id}>
                <Table.Cell collapsing>
                  <strong>{shop.name}</strong>
                </Table.Cell>
                <Table.Cell>
                  <List divided horizontal>
                    {price[shop.id] &&
                      missingIngredients.map(ingredient => (
                        <List.Item key={ingredient}>
                          <List.Content>
                            <span>{ingredient}: </span>
                            <strong>{price[shop.id][ingredient]} zł</strong>
                          </List.Content>
                        </List.Item>
                      ))}
                  </List>
                </Table.Cell>
                <Table.Cell collapsing>
                  {price[shop.id] ? (
                    `${this.getShopPrice(shop.id)} zł`
                  ) : (
                    <Icon loading name="spinner" />
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan="100%">
                <Button
                  onClick={() => getBasketPrice(recipeIngredients)}
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="retweet" /> Sprawdź ponownie
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

IngredientsPrice.defaultProps = {};

const getRecipeIngredients = (state, ownProps) => {
  const recipes = getRecipes(state)
  return find(recipes, recipe => recipe.id === parseInt(ownProps.id, 10)).ingredients;
};

const getMissingIngredients = (state, ownProps) => {
  return getRecipeIngredients(state, ownProps).filter(item => {
    return !getSelectedIngredients(state).includes(item);
  });
};

const mapStateToProps = (state, ownProps) => ({
  recipeIngredients: getRecipeIngredients(state, ownProps),
  missingIngredients: getMissingIngredients(state, ownProps),
  shops: getShops(state),
  price: getBasket(state),
});

const mapDispatchToProps = dispatch => ({
  getBasketPrice: ingredients => dispatch({ type: 'GET_BASKET_PRICE', payload: ingredients }),
  closeBasket: ingredients => dispatch({ type: 'CLOSE_BASKET' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsPrice);
