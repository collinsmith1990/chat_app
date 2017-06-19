import {
  CREATE_USER
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case CREATE_USER.ERROR.type:
      return { ...state, error: action.payload.message}
    default:
      return state;
  }
}
