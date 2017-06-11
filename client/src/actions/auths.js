import { 
  API,
  SIGNIN_USER,
  SIGNOUT_USER
} from './types';

export function signinUser(auth) {
  return ({
    type: API,
    payload: {
      url: 'auth_user',
      method: 'post',
      body: auth,
      ...SIGNIN_USER
    }
  });
}

export function signoutUser() {
  return ({
    type: SIGNOUT_USER
  })
}

