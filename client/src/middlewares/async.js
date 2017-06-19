import axios from 'axios';
import { ROOT_URL } from '../config';
import { API } from '../actions/types';
import { clearFlash } from '../actions/flash_messages';

export default function({ dispatch, getState }){
  return next => action => {
    if (action.type != API) {
      return next(action);
    }

    dispatch({
      type: action.payload.PENDING.type
    })

    const token = getState().auths.auth_token;

    axios({
        method: action.payload.method,
        url: `${ROOT_URL}/${action.payload.url}`,
        data: action.payload.body,
        headers: { Authorization: token },
    })
      .then(response => {
        const newAction = {
          ...action.payload.SUCCESS,
          payload: response.data 
        }

        dispatch(newAction);
        newAction.callback(newAction.payload, dispatch);
      })
      .catch(error => {
        const newAction = {
          ...action.payload.ERROR,
          payload: error.response.data.error 
        }

        console.log(error.response.data.error);
        dispatch(newAction);
        newAction.callback(newAction.payload, dispatch);
      });
  };
}
