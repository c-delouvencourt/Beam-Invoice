import * as types from '../../actions/ActionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  isAuthenticated: false,
  user: undefined,
});

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case types.AUTH_LOG_USER:
      return state.merge({
        user: action.payload,
        isAuthenticated: true
      });
    case types.AUTH_LOG_OUT_USER:
      return state.merge({
        user: undefined,
        isAuthenticated: false
      });
    default:
      return state;
  }
}
