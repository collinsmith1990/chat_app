import axios from 'axios';
import { ROOT_URL } from '../config';
import { API } from '../actions/types';

export default function({ dispatch, getState }){
  return next => action => {
    console.log(action)
    if (action.type != API) {
      return next(action);
    }

    dispatch({
      type: action.payload.PENDING
    })

    const url = `${ROOT_URL}/${action.payload.url}`
    const token = getState().auths.auth_token;

    axios({
        method: action.payload.method,
        url: url,
        data: action.payload.body,
        headers: { Authorization: token },
    })
      .then(response => {
        console.log(response);
        dispatch({
          type: action.payload.SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: action.payload.ERROR,
          payload: error
        });
      });
  };
}
