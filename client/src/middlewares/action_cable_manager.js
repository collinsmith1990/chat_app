import ActionCable from 'actioncable';
import { WEB_SOCKET_URL } from '../config';
import {
  CREATE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION 
} from '../actions/types';

const cable = ActionCable.createConsumer(WEB_SOCKET_URL);

export default function({ dispatch }){

  return next => action => {
    switch(action.type) {
      case CREATE_SUBSCRIPTION:

        const sub = cable.subscriptions.create(action.payload.identifier, {
          received: (data) => {
            action.payload.callback(data, dispatch);
          }
        });

        dispatch({
          type: action.payload.subscription,
          payload: sub
        })

        return next(action);
      case REMOVE_SUBSCRIPTION:
        cable.subscriptions.remove(action.payload);
      default:
        return next(action);
    }
  };
}

