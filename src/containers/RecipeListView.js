import React from "react";
import RecipeItem from "./RecipeItem";
import Counter from "./Counter";
import {Button, Header, Item, Segment} from "semantic-ui-react";

export default ({ recipes = [], recipeRefresh }) =>
  <Counter>
    {(counter, plus, minus) => {
      return (
        <div>
          <Segment clearing vertical basic>
            <Button.Group basic floated="right">
              <Button onClick={minus} icon="minus" />
              <Button>limit: {counter}</Button>
              <Button onClick={plus} icon="plus" />
              <Button onClick={recipeRefresh} icon="refresh" />
            </Button.Group>
            <Header floated="left" as="h1">
              Dostępne przepisy:
            </Header>
          </Segment>
          <Item.Group divided>
            {recipes
              .slice(0, counter)
              .map(item => <RecipeItem key={item.id} id={item.id} />)}
          </Item.Group>
        </div>
      );
    }}
  </Counter>
