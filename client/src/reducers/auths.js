import {
  CREATE_USER,
  SIGNIN_USER,
  SIGNOUT_USER
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case SIGNIN_USER.SUCCESS.type:
      return { 
        ...state,
        auth_token: action.payload.auth_token,
        current_user: action.payload.user
      }
    case SIGNOUT_USER:
      return {
        ...state,
        auth_token: undefined,
        current_user: undefined
      }
    default:
      return state
  }
}


