import React from 'react';

import {
  Container
} from './styles';

interface IMenuMobileProps {
  open: boolean;
}

const MenuMobile: React.FC<IMenuMobileProps> = ({ open }) => (
  <Container className='open' style={ open ? {display: 'block', left: 0} : {}}>
    <h1>MENU</h1>
  </Container>
);

export default MenuMobile;