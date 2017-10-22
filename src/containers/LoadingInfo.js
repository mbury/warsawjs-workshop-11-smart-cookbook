import React from 'react';
import {
  Icon,
  Message,
} from 'semantic-ui-react';

const message = "Loading";
const selector = () => false;

export default props => {
  const isLoading = selector(props);
  return isLoading ? (
    <Message icon>
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>Trawa ładowanie danych</Message.Header>
        { message }
      </Message.Content>
    </Message>
  ) : (
    <div></div> // Here should be
  );
}