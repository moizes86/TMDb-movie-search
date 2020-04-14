import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import {theme} from './theme.styles';
import './index.scss';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
