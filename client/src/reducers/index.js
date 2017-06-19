import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux'
import auths from './auths';
import messages from './messages';
import rooms from './rooms';
import users from './users';
import flashMessages from './flash_messages';

const rootReducer = combineReducers({
  form,
  routing,
  messages,
  rooms,
  users,
  auths,
  flashMessages 
});

export default rootReducer;
