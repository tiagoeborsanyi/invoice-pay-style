import React, { useState } from 'react';
import { 
  RiHome3Line,
  RiCheckboxCircleLine,
  RiUser3Line,
  RiInboxLine,
  RiCalendarTodoLine,
  RiSettings2Line,
  RiArrowLeftLine,
  RiArrowRightLine
 } from "react-icons/ri";

import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
  ExpandButton
} from './styles';
import Logo from '../../assets/carteira.png';

const Aside: React.FC = () => {
  const [expandColumn, setExpandColumn] = useState(false);

  const openMenu = () => {
    setExpandColumn(!expandColumn);
  }

  return (
    <Container className={expandColumn ? 'expand' : ''}>
      <Header className={expandColumn ? 'header-expand' : ''}>
        <LogoImg src={Logo} alt='logo' />
      </Header>

      <MenuContainer>
        <MenuItemLink href='#' className='selected'>
          <RiHome3Line />
          { expandColumn ? <span className='expandTitle'>HOME</span> : null}
        </MenuItemLink>

        <MenuItemLink href='#'>
          <RiCheckboxCircleLine />
          { expandColumn ? <span className='expandTitle'>SAVED</span> : null}
        </MenuItemLink>

        <MenuItemLink href='#'>
          <RiUser3Line />
          { expandColumn ? <span className='expandTitle'>MEMBERS</span> : null}
        </MenuItemLink>

        <MenuItemLink href='#'>
          <RiInboxLine />
          { expandColumn ? <span className='expandTitle'>BOX</span> : null}
        </MenuItemLink>

        <MenuItemLink href='#'>
          <RiCalendarTodoLine />
          { expandColumn ? <span className='expandTitle'>CALENDAR</span> : null}
        </MenuItemLink>

        <MenuItemLink href='#'>
          <RiSettings2Line />
          { expandColumn ? <span className='expandTitle'>SETTINGS</span> : null}
        </MenuItemLink>
      </MenuContainer>
      <ExpandButton onClick={openMenu}>
        {
          expandColumn ? <RiArrowLeftLine /> : <RiArrowRightLine />
        }
        
      </ExpandButton>
    </Container>
  );
}

export default Aside;