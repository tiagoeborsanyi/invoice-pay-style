import React from 'react';

import { Grid } from './styles';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = ({ children }) => {
  return (
    <Grid>
      <div className='aside-mobile'>
        <Aside open={false} />
      </div>
      <Content>
        {children}
      </Content>
    </Grid>
  );
}

export default Layout;