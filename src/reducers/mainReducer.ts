import { combineReducers } from 'redux';
import newsSearch from './newsSearch';
import common from './common';

export default combineReducers({
    newsSearch,
    common
});