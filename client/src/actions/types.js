const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

export const API = 'API';

export const RESOLVE_REDIRECT = 'RESOLVE_REDIRECT';

export const SIGNIN_USER  = asyncActionType('SIGNIN_USER');
export const SIGNOUT_USER  = asyncActionType('SIGNOUT_USER');

export const CREATE_USER = asyncActionType('CREATE_USER');

export const CREATE_SUBSCRIPTION = 'CREATE_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CREATE_MESSAGE = asyncActionType('CREATE_MESSAGE');
export const FETCH_MESSAGES = asyncActionType('FETCH_MESSAGES');

export const FETCH_ROOMS = asyncActionType('FETCH_ROOMS');
export const CHANGE_ROOM = 'CHANGE_ROOM';
export const SET_ROOM_SUBSCRIPTION = 'SET_ROOM_SUBSCRIPTION';
