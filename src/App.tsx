import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import ContentPage from './pages/ContentPage';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Layout>
        <ContentPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
