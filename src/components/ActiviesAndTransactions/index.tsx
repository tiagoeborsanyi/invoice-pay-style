import React from 'react';

import Activies from '../Activies';
import Transactions from '../Transactions';
import {
  Container
} from './styles';

const ActiviesAndTransactions = () => (
  <Container>
    <Activies />
    <Transactions />
  </Container>
)

export default ActiviesAndTransactions;