import { combineReducers } from 'redux';
import store from 'store2';
import { fromJS } from 'immutable';

import { actionConstants } from './actions';

const { REGISTER_USER, LOGIN_USER, VERIFY_TOKEN, LOGOUT_USER } = actionConstants;
const defaultState = fromJS({ data: null, loading: false, error: null });

const token = (state = fromJS({ data: store.get('token') || null, loading: false }), action) => {
  switch (action.type) {
    case `${VERIFY_TOKEN}_REQUEST`:
      return state.set('loading', true);
    case `${VERIFY_TOKEN}_SUCCESS`:
      return fromJS({ data: action.json.token, loading: false });
    case `${VERIFY_TOKEN}_FAILURE`:
      return fromJS({ data: null, loading: false });
    default:
      return state;
  }
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case `${REGISTER_USER}_REQUEST`:
    case `${LOGIN_USER}_REQUEST`:
    case `${VERIFY_TOKEN}_REQUEST`:
      return state.set('loading', true);

    case `${REGISTER_USER}_SUCCESS`:
    case `${LOGIN_USER}_SUCCESS`:
    case `${VERIFY_TOKEN}_SUCCESS`:
      store.set('token', action.json.token);
      return fromJS({
        data: action.json,
        loading: false,
        error: null,
      });

    case `${REGISTER_USER}_FAILURE`:
    case `${LOGIN_USER}_FAILURE`:
      store.set('token', action.json.token);
      return defaultState.set('error', action.json.message);

    case `${VERIFY_TOKEN}_FAILURE`:
    case LOGOUT_USER:
      store.clear();
      return defaultState;

    default:
      return state;
  }
};

export default combineReducers({ token, user });
