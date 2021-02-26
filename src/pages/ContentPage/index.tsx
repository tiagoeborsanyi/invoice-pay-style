import React from 'react';
import {
  RiArrowRightSLine
} from 'react-icons/ri'

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
          <div className='credits'>
          <CreditCard backColor='#0014F5' ballonOne='#ADB4FF' />
          <CreditCard backColor='#2EBA02' ballonOne='#D0FEC2' />
          </div>
          <button>
            <RiArrowRightSLine />
          </button>
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