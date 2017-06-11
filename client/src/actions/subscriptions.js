import {
  CREATE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION 
} from './types';

export function createSubscription(identifier, received, subscription) {
  return {
    type: CREATE_SUBSCRIPTION,
    payload: {
      identifier,
      received,
      subscription
    }
  }
}

export function removeSubscription(subscription) {
  return {
    type: REMOVE_SUBSCRIPTION,
    payload: subscription
  }
}
