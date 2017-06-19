import {
  FLASH,
  CLEAR_FLASH
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case FLASH:
      return { ...state, flash: action.payload }
    case CLEAR_FLASH:
      return { ...state, flash: undefined }
    default:
      return state;
  }
}
