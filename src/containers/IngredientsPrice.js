import React from 'react';
import { Icon, Header, Table, Button, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { xor, reduce } from 'lodash';

class IngredientsPrice extends React.Component {
  componentDidMount() {
    const { getBasketPrice, recipeIngredients } = this.props;
    getBasketPrice(recipeIngredients);
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
  return state.entities.recipes[Number(ownProps.id)].ingredients;
};

const mapStateToProps = (state, ownProps) => ({
  recipeIngredients: getRecipeIngredients(state, ownProps),
  missingIngredients: xor(
    getRecipeIngredients(state, ownProps),
    state.ingredients
  ),
  shops: state.shops,
  price: state.price,
});

const mapDispatchToProps = dispatch => ({
  getBasketPrice: ingredients => {
    dispatch({ type: 'GET_BASKET_PRICE', payload: ingredients });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsPrice);
