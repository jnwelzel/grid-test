import React from 'react';
import { render } from 'react-dom';

import Header from './pages/Header';
import './index.scss';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById('react-root'));
