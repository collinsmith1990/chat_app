import { browserHistory } from 'react-router';

import { 
  RESOLVE_REDIRECT
} from './types';

export function resolveRedirect(path) {
  browserHistory.push(path);
  return({
    type: RESOLVE_REDIRECT
  });
}
