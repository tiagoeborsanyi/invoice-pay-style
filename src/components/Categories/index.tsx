import React from 'react';
import {
  RiAddLine,
  RiBillFill,
  RiPingPongFill,
  RiHandbagFill,
  RiSoundcloudFill
} from 'react-icons/ri';

import {
  Container, 
  CTitle,
  CList,
  CItem,
  CItemIcon,
  CItemText
} from './styles';

const Categories = () => (
    <Container>
      <CTitle>
        <h3>Categories</h3>
        <button><RiAddLine /></button>
      </CTitle>
      <CList>
        <CItem>
          <CItemIcon color='green'>
            <RiBillFill />
          </CItemIcon>
          <CItemText>
            <p>Bills</p>
            <span>$145.000,00</span>
          </CItemText>
        </CItem>

        <CItem>
          <CItemIcon color='orange'>
            <RiPingPongFill />
          </CItemIcon>
          <CItemText>
            <p>Entertaiment</p>
            <span>$5.454,35</span>
          </CItemText>
        </CItem>

        <CItem>
          <CItemIcon color='blue'>
            <RiHandbagFill />
          </CItemIcon>
          <CItemText>
            <p>Shopping</p>
            <span>$3.456,00</span>
          </CItemText>
        </CItem>

        <CItem>
          <CItemIcon color='violet'>
            <RiSoundcloudFill />
          </CItemIcon>
          <CItemText>
            <p>Utility</p>
            <span>$2.456,00</span>
          </CItemText>
        </CItem>
      </CList>
    </Container>
);

export default Categories;