import React from 'react';
import { 
  RiArrowUpLine,
  RiArrowDownLine
 } from "react-icons/ri";

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
        <div className='values-gains-expenses'>
          <RiArrowUpLine className='arrow-up' />
          <p>$500,50</p>
        </div>
        <span>Today's Income</span>
      </div>
      <div>
        <div className='values-gains-expenses'>
          <RiArrowDownLine className='arrow-down' />
          <p>$150,75</p>
        </div>
        <span>Today's Spending</span>
      </div>
    </Moves>
  </Container>
);

export default TextBalance;