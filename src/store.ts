import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/mainReducer';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default store;