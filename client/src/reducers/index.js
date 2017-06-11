import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux'
import paths from './paths';
import auths from './auths';
import messages from './messages';
import rooms from './rooms';

const rootReducer = combineReducers({
  form,
  routing,
  paths,
  messages,
  rooms,
  auths
});

export default rootReducer;
