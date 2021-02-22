import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Layout>
        <h1>LAYOUT</h1>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
