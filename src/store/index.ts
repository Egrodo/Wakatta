import { createStore, combineReducers } from 'redux';

import initialState from './initialState';
import { pageChangeReducer } from './reducers';

const reducers = combineReducers({
  currPage: pageChangeReducer,
});

export default createStore(
  (state, action) => reducers(state, action),
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
