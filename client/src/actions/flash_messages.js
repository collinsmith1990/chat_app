import {
  FLASH,
  CLEAR_FLASH
} from './types';

export function flash(message, type = 'alert') {
  return {
    type: FLASH,
    payload: {
      message,
      type
    } 
  }
}

export function clearFlash() {
  return {
    type: CLEAR_FLASH
  }
}
