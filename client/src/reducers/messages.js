import {
  ADD_MESSAGE,
  CREATE_MESSAGE, 
  FETCH_MESSAGES
} from '../actions/types';

export default function(state = { all: [] }, action) {
  switch(action.type) {
    case ADD_MESSAGE:
      return { ...state, all:  [...state.all, action.payload] };
    case FETCH_MESSAGES.PENDING:
      return { ...state, loading: true }
    case FETCH_MESSAGES.SUCCESS:
      return { ...state, all: action.payload, loading: false };
    default:
      return state;
  }
}

