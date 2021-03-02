import React from 'react';
import CountUp from 'react-countup';
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
    <TotalValue>
      <CountUp 
        end={530250.75}
        prefix={'$ '}
        separator='.'
        decimal=','
        decimals={2}
      />
    </TotalValue>
    <Moves>
      <div>
        <div className='values-gains-expenses'>
          <RiArrowUpLine className='arrow-up' />
          <p>
          <CountUp 
            end={500.50}
            prefix={'$ '}
            separator='.'
            decimal=','
            decimals={2}
          />
          </p>
        </div>
        <span>Today's Income</span>
      </div>
      <div>
        <div className='values-gains-expenses'>
          <RiArrowDownLine className='arrow-down' />
          <p>
          <CountUp 
            end={150.75}
            prefix={'$ '}
            separator='.'
            decimal=','
            decimals={2}
          />
          </p>
        </div>
        <span>Today's Spending</span>
      </div>
    </Moves>
  </Container>
);

export default TextBalance;