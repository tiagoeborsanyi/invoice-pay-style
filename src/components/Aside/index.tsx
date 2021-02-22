import React from 'react';
import { 
  RiHome3Line,
  RiCheckboxCircleLine,
  RiUser3Line,
  RiInboxLine,
  RiCalendarTodoLine,
  RiSettings2Line
 } from "react-icons/ri";

import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink
} from './styles';
import Logo from '../../assets/carteira.png';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={Logo} alt='logo' />
      </Header>

      <MenuContainer>
        <MenuItemLink href='#' className='selected'>
          <RiHome3Line />
        </MenuItemLink>

        <MenuItemLink href='#'>
          <RiCheckboxCircleLine />
        </MenuItemLink>

        <MenuItemLink href='#'>
          <RiUser3Line />
        </MenuItemLink>

        <MenuItemLink href='#'>
          <RiInboxLine />
        </MenuItemLink>

        <MenuItemLink href='#'>
          <RiCalendarTodoLine />
        </MenuItemLink>

        <MenuItemLink href='#'>
          <RiSettings2Line />
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
}

export default Aside;