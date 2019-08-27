import { combineReducers } from 'redux';
// import { sessionReducer } from 'redux-react-session';
import accountReducer from './account';

export default combineReducers({
  account: accountReducer,
});
