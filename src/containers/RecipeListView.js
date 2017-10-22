import React from "react";
import RecipeItem from "./RecipeItem";
import Counter from "./Counter";
import {Button, Header, Item, Segment} from "semantic-ui-react";

// here you should use function as a children, using Counter component
// to display -, + and amount how many recipes should be displayed

export default ({ recipes = [], recipeRefresh }) =>
    <div>
      <Segment clearing vertical basic>
        <Button.Group basic floated="right">
          <Button onClick={recipeRefresh} icon="refresh" />
        </Button.Group>
        <Header floated="left" as="h1">
          Dostępne przepisy:
        </Header>
      </Segment>
      <Item.Group divided>
        {recipes
          .map(item => <RecipeItem key={item.id} id={item.id} />)}
      </Item.Group>
    </div>

