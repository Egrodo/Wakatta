import type { AnyAction } from 'redux';
import type { pageTypes } from './initialState';

export const changePage = (newPage: pageTypes): AnyAction => ({
  type: 'PAGE_CHANGE',
  destination: newPage,
});
