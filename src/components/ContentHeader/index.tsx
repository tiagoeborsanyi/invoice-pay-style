import React, { useState } from 'react';
import {
  RiSearchLine,
  RiNotification3Fill,
  RiCalendarTodoFill,
  RiMenuFill
} from "react-icons/ri";

import MenuMobile from '../MenuMobile';
import memoji from '../../assets/memoji.png';
import { 
  Container,
  Form,
  ItemsContentHeader,
  ItemContentHeader,
  BackMenu
 } from './styles';

const ContentHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenuMobile = () => {
    setOpen(!open);
  }
  
  return (
    <Container>
      <RiMenuFill className='menu-mobile' onClick={handleOpenMenuMobile} />
      <MenuMobile open={open} />
      <Form>
        <input type='text' placeholder='Search for transaction name or amount' />
        <RiSearchLine />
        <BackMenu onClick={handleOpenMenuMobile} style={open ? {display: 'block', width: '100%', opacity: '1'} : {}} />
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