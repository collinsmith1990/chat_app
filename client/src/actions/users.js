import { browserHistory } from 'react-router';
import {
  API,
  CREATE_USER
} from './types';

import { flash } from './flash_messages';

export function createUser(user) {
  return {
    type: API,
    payload: {
      ...CREATE_USER,
      url: 'users',
      method: 'post',
      body: { user: {...user}},
      SUCCESS: {
        ...CREATE_USER.SUCCESS,
        callback: (payload, dispatch) => {
          browserHistory.push('/rooms');
          dispatch(flash('Welcome!', 'success'));
        }
      }
    }
  }
}
