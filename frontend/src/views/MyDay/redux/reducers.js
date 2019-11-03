import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import getApiReducer, { defaultState } from '../../../utils/getApiReducer';

import { actionConstants } from './actions';

const { POST_EVENT, GET_EVENTS } = actionConstants;

const eventList = (state = defaultState, action) => {
  switch (action.prefix) {
    case GET_EVENTS:
      state = getApiReducer(GET_EVENTS)(state, action);
      break;
    case `${POST_EVENT}_SUCCESS`:
      state = state.set('data', state.get('data').push(fromJS(action.json)));
      break;
    default:
  }
  return state;
};

export default combineReducers({ eventList });
