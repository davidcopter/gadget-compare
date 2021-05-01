import React from 'react';
import './App.css';

import { Layout } from './layout';
import { Compare } from './features/compare/Compare';

function App() {
  return (
    <Layout title="Gadget Compare">
      <Compare />
    </Layout>
  );
}

export default App;
