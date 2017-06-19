import {
  CREATE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION 
} from './types';

export function createSubscription(identifier, subscription, callback = {}) {
  return {
    type: CREATE_SUBSCRIPTION,
    payload: {
      identifier,
      subscription,
      callback: callback
    }
  }
}

export function removeSubscription(subscription) {
  return {
    type: REMOVE_SUBSCRIPTION,
    payload: subscription
  }
}
