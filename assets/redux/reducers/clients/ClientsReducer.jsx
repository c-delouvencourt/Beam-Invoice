import * as types from '../../actions/ActionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  clients: []
});

export default function clients(state = initialState, action = {}) {
  switch (action.type) {
    case types.CLIENTS_UPDATE_LIST:
      return state.merge({
        clients: action.payload
      });
    default:
      return state;
  }
}
