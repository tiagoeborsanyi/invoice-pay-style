import React from 'react';
import {
  RiSearchLine,
  RiNotification3Fill,
  RiCalendarTodoFill
} from "react-icons/ri";

import memoji from '../../assets/memoji.png';
import { 
  Container,
  Form,
  ItemsContentHeader,
  ItemContentHeader
 } from './styles';

const ContentHeader: React.FC = () => {
  
  return (
    <Container>
      <Form>
        <input type='text' placeholder='Search for transaction name or amount' />
        <RiSearchLine />
      </Form>
      <ItemsContentHeader>
        <ItemContentHeader className='item-date'>
          <span>Today 12/01/2021</span>
          <RiCalendarTodoFill />
        </ItemContentHeader>
        <ItemContentHeader className='item-svg'>
          <RiNotification3Fill />
        </ItemContentHeader>
        <ItemContentHeader className='item-img'>
          <img src={memoji} alt='memoji icon' />
        </ItemContentHeader>
      </ItemsContentHeader>
    </Container>
  );
}

export default ContentHeader;