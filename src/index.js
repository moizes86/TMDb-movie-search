import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter, Route } from 'react-router-dom';

import { theme } from './theme.styles';
import './index.css';
import { ThemeProvider } from 'styled-components';



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Route path='/' exact={true} component={App} />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
