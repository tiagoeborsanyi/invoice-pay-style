import React from 'react';

import {
  Card
} from './styles';
import {
  RiVisaLine,
  RiBankCardLine
} from "react-icons/ri";

interface ICreditCard {
  backColor: string;
  ballonOne: string;
}

const ContentPage: React.FC<ICreditCard> = ({ backColor, ballonOne }) => {
  return (
    <Card backColor={backColor} ballonOne={ballonOne}>
      <div className="ballon-1"></div>
      <div className="ballon-2"></div>
      <div className="ballon-3"></div>
      <div className="ballon-4"></div>
      <div className="ballon-5"></div>
      <p className="value">$50.125,00</p>
      <RiBankCardLine className='icon-card' />
      <div className='credit'>
        <RiVisaLine className='credit__name' />
        <p className='credit__number'>**** **** 4785</p>
      </div>
      <div className='author'>
        <p className='author__name'>Antor Paul</p>
        <p className='author__date'>05/2022</p>
      </div>
    </Card>
  )
}

export default ContentPage;