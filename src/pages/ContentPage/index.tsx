import React from 'react';

import {
  Container,
  CLeft,
  Lineone,
  Linetwo,
  CRight
} from './styles';
import TextBalance from '../../components/TextBalance';
import CreditCard from '../../components/CreditCard';

const ContentPage = () => {
  return (
    <Container>
      <CLeft>
        <Lineone>
          <TextBalance />
          <CreditCard />
        </Lineone>
        <Linetwo>

        </Linetwo>
      </CLeft>
      <CRight>

      </CRight>
    </Container>
  )
}

export default ContentPage;