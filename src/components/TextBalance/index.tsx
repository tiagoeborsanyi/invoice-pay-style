import React from 'react';

import {
  Container
} from './styles';

const TextBalance = () => (
  <Container>
    <h3>Your total balance</h3>
    <span>$530.250,75</span>
    <div>
      <div>
        <p>$500,50</p>
        <span>Today's Income</span>
      </div>
      <div>
        <p>$150,75</p>
        <span>Today's Spending</span>
      </div>
    </div>
  </Container>
);

export default TextBalance;