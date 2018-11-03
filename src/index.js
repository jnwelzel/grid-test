import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import './index.scss';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById('react-root'));
