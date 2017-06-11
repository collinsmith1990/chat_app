import axios from 'axios';
import { ROOT_URL } from '../config';
import { 
  API,
  FETCH_ROOMS,
  CHANGE_ROOM,
  SET_ROOM_SUBSCRIPTION
} from './types';


export function changeRoom(room) {
  return {
    type: CHANGE_ROOM,
    payload: room
  }
}

export function fetchRooms() {
  return {
    type: API,
    payload: {
      url: 'rooms',
      method: 'get',
      ...FETCH_ROOMS
    }
  }
}
