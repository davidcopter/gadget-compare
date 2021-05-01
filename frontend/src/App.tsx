import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';

import { Layout } from './layout';
import { Compare } from './features/compare/Compare';

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadget Compare - Help you choose the best items.</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout title="Gadget Compare">
        <Compare />
      </Layout>
    </React.Fragment>
  );
}

export default App;
