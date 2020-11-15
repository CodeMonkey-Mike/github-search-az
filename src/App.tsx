import React from 'react';
import { History } from 'history';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './Routes';
import { AppState } from './store/rootReducer';

interface AppProps {
  store: Store<AppState>;
  history: History;
}

const App = ({ store, history }: AppProps) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
