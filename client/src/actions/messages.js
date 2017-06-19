import { FORM } from  '../components/messages/new';
import { reset } from 'redux-form';
import { 
  API,
  FETCH_MESSAGES,
  CREATE_MESSAGE 
} from './types';

import { flash } from './flash_messages';


export function createMessage(message, room) {
  return ({
    type: API,
    payload: {
      ...CREATE_MESSAGE,
      url: `rooms/${room.id}/messages`,
      method: 'post',
      body: message,
      SUCCESS: {
        ...CREATE_MESSAGE.SUCCESS,
        callback: (payload, dispatch) => {
          dispatch(reset(FORM));
        }
      }
    }
  });
}

export function fetchMessages(room) {
  return {
    type: API,
    payload: {
      ...FETCH_MESSAGES,
      url: `rooms/${room.id}/messages`,
      method: 'get'
    }
  }
}
