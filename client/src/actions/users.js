import {
  API,
  CREATE_USER
} from './types';

export function createUser(user) {
  return {
    type: API,
    payload: {
      url: 'users',
      method: 'post',
      body: { user: {...user}},
      ...CREATE_USER
    }
  }
}
