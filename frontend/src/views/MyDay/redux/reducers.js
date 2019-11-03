import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import getApiReducer, { defaultState } from '../../../utils/getApiReducer';

import { actionConstants } from './actions';

const { POST_EVENT, GET_TODAYS_EVENTS } = actionConstants;

const today = (state = defaultState, action) => {
  state = getApiReducer(GET_TODAYS_EVENTS)(state, action);

  switch (action.type) {
    case `${POST_EVENT}_SUCCESS`:
      state = state.set('data', state.get('data').push(fromJS(action.json)));
      break;
    default:
  }
  return state;
};

export default combineReducers({ today });
