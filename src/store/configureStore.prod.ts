import { createStore, applyMiddleware, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createHashHistory } from 'history';
import createRootReducer, { AppState } from './rootReducer';
import rootSaga from './rootSaga';

const history = createHashHistory();
const router = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, router);

const configureStore = (initialState: AppState): Store<AppState> => {
  sagaMiddleware.run(rootSaga);
  return createStore(createRootReducer(history), initialState, enhancer);
};

export { configureStore, history };
