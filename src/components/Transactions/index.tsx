import React from 'react';
import {
  RiUserFill,
  RiSuitcaseFill,
  RiAlertLine,
  RiSpotifyFill,
  RiArrowUpLine,
  RiArrowDownLine
} from 'react-icons/ri';

import { 
  Container,
  TTitle,
  TList,
  TItem,
  TItemIcon,
  TItemText,
  TItemBadge
} from './styles'

const Transactions = () => (
  <Container>
      <TTitle>
        <h3>My Transactions</h3>
        <button>See All</button>
      </TTitle>
      <TList>
        <TItem>
          <TItemIcon className='icon' color='green'>
            <RiUserFill />
          </TItemIcon>
          <TItemText>
            <p>Jhon A Branda</p>
            <span>15 Jan 2021</span>
          </TItemText>
          <TItemBadge className='iconbadge' color='red'>
            <div>
              <RiArrowUpLine />
            </div>
            <span>Sent $120.00</span>
          </TItemBadge>
        </TItem>

        <TItem>
          <TItemIcon className='icon' color='orange'>
            <RiSuitcaseFill />
          </TItemIcon>
          <TItemText>
            <p>Askademia</p>
            <span>15 Jan 2021</span>
          </TItemText>
          <TItemBadge className='iconbadge' color='green'>
            <div><RiArrowDownLine /></div>
            <span>Received $5000.00</span>
          </TItemBadge>
        </TItem>

        <TItem>
          <TItemIcon className='icon' color='blue'>
            <RiAlertLine />
          </TItemIcon>
          <TItemText>
            <p>Steven Smith</p>
            <span>$05 Dez 2020</span>
          </TItemText>
          <TItemBadge className='iconbadge' color='orange'>
            <div><RiAlertLine /></div>
            <span>Pending $500.00</span>
          </TItemBadge>
        </TItem>

        <TItem>
          <TItemIcon className='icon' color='violet'>
            <RiSpotifyFill />
          </TItemIcon>
          <TItemText>
            <p>Spotify Podcast</p>
            <span>10 Jan 2021</span>
          </TItemText>
          <TItemBadge className='iconbadge' color='red'>
            <div><RiArrowUpLine /></div>
            <span>Subscribe $9.00</span>
          </TItemBadge>
        </TItem>
      </TList>
    </Container>
);

export default Transactions;