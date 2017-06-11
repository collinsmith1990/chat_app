import { FORM } from  '../components/messages/new';
import { reset } from 'redux-form';
import { 
  API,
  FETCH_MESSAGES,
  CREATE_MESSAGE 
} from './types';


export function createMessage(message, room) {
  return function(dispatch) {
    dispatch({
      type: API,
      payload: {
        url: `rooms/${room.id}/messages`,
        method: 'post',
        body: message,
        ...CREATE_MESSAGE
      }
    });
    dispatch(reset(FORM));
  };
}

export function fetchMessages(room) {
  return {
    type: API,
    payload: {
      url: `rooms/${room.id}/messages`,
      method: 'get',
      ...FETCH_MESSAGES
    }
  }
}
