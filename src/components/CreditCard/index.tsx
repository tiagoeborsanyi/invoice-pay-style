import React from 'react';

import {
  Card
} from './styles';

const ContentPage = () => {
  return (
    <Card>
      <div className="ballon-1"></div>
      <div className="ballon-2"></div>
      <div className="ballon-3"></div>
      <div className="ballon-4"></div>
      <div className="ballon-5"></div>
      <p className="value">$50.125,00</p>
      <div className='credit'>
        <p className='credit__name'>VISA</p>
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