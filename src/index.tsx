import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { configureStore, history } from './store';

export const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={{ mode: 'ccad' }}>
    <React.Fragment>
      <GlobalStyle />
      <App store={store} history={history} />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);
