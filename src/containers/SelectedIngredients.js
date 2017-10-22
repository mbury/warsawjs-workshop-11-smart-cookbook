import React from "react";
import {Icon, List} from "semantic-ui-react";

export default ({ ingredients = [], onDelete }) => {
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
