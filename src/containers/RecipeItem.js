import React from "react";
import {Item, Label} from "semantic-ui-react";
import {Link} from "react-router-dom";

import IngredientsList from "../components/IngredientsList";
import IngredientsSummary from "../containers/IngredientsSummary";

export default ({ recipe, selected }) => {
  return (
    <Item>
      <Item.Image src="http://via.placeholder.com/175x175" />
      <Item.Content verticalAlign="middle">
        <Item.Header as="a">{recipe.title}</Item.Header>
        <Item.Meta>
          <IngredientsSummary id={recipe.id} ingredients={recipe.ingredients} />
        </Item.Meta>
        <Item.Description>
          Nam odio orci, hendrerit a arcu at, cursus condimentum quam. Duis
          dictum lacinia tempor. Pellentesque id dolor vel nunc finibus
          accumsan. In sed lorem et erat congue ultricies laoreet non arcu.
        </Item.Description>
        <Item.Extra>
          <IngredientsList ingredients={recipe.ingredients} />
        </Item.Extra>
        <Item.Extra>
          {!selected && (
            <Label
              basic
              color="blue"
              icon="shop"
              as={Link}
              content="KUP SKŁADNIKI"
              to={`/basket/${recipe.id}`}
            />
          )}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};