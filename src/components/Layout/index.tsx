import React from 'react';

import { Grid } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Grid>
      {children}
    </Grid>
  );
}

export default Layout;