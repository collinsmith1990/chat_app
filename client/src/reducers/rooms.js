import {
  CREATE_MESSAGE,
  FETCH_ROOMS, 
  CHANGE_ROOM,
  SET_ROOM_SUBSCRIPTION 
} from '../actions/types';

const initialState = { 
  all: [],
  channel: { 
    name: 'MessagesChannel',
    actionType: CREATE_MESSAGE,
    options: { room_id: 3 } 
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_ROOM:
      return { 
        ...state,
        current: action.payload,
        channel: { 
          ...state.channel,
          options: { 
            ...state.channel.options,
            room_id: action.payload.id
          }
        }
      };
    case FETCH_ROOMS.PENDING.type:
      return { ...state, loading: true };
    case FETCH_ROOMS.SUCCESS.type:
      return { ...state, all: [...state.all, ...action.payload], current: action.payload[0], loading: false };
    case SET_ROOM_SUBSCRIPTION:
      return { ...state, subscription: action.payload };
    default:
      return state;
  }
}


