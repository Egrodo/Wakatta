import type { pageTypes } from './initialState';
import type { AnyAction } from 'redux';

export const pageChangeReducer = (
  state: pageTypes = null,
  action: AnyAction
): pageTypes => {
  switch (action.type) {
    case 'PAGE_CHANGE':
      return action.destination;
    default:
      return state;
  }
};
