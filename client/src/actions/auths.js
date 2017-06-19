import { browserHistory } from 'react-router';
import { 
  API,
  SIGNIN_USER,
  SIGNOUT_USER
} from './types';
import { flash } from './flash_messages';

export function signinUser(auth) {
  return ({
    type: API,
    payload: {
      ...SIGNIN_USER,
      url: 'auth_user',
      method: 'post',
      body: auth,
      SUCCESS: {
        ...SIGNIN_USER.SUCCESS,
        callback: (payload, dispatch) => {
          browserHistory.push('/rooms');
          dispatch(flash('Welcome Back!', 'success'));
        }
      }
    }
  });
}

export function signoutUser() {
  return function(dispatch) {
    dispatch({
      type: SIGNOUT_USER
    });
    dispatch(flash('Come back soon!', 'info'));
  }
}

