import React from 'react';

import {
  Container,
  Title,
  TotalValue,
  Moves
} from './styles';

const TextBalance = () => (
  <Container>
    <Title>Your total balance</Title>
    <TotalValue>$530.250,75</TotalValue>
    <Moves>
      <div>
        <p>$500,50</p>
        <span>Today's Income</span>
      </div>
      <div>
        <p>$150,75</p>
        <span>Today's Spending</span>
      </div>
    </Moves>
  </Container>
);

export default TextBalance;