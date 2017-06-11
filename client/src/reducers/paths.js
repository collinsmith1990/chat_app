import {
  SET_PATH,
  RESOLVE_REDIRECT,
  CREATE_USER,
  SIGNIN_USER,
  SIGNOUT_USER
} from '../actions/types';

export default function(state = { current: '/' }, action) {
  switch(action.type) {
    case SET_PATH:
      return { ...state, current: action.payload }
    case RESOLVE_REDIRECT:
      return { ...state, redirect_to: undefined }
    case CREATE_USER.SUCCESS:
    case SIGNIN_USER.SUCCESS:
      return { ...state, redirect_to: '/rooms' }
    case SIGNOUT_USER:
      return { ...state, redirect_to: '/' }
    default:
      return state
  }
}

