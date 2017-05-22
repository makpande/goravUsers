import { FETCH_USERS, FETCH_USER, FETCH_PROFESSIONS, FETCH_PROFESSION } from '../actions/index';

const INITIAL_STATE = { all: [], user: null, prof: [], profession: [] }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
      return {...state, all: action.payload.data };
    case FETCH_USER:
      return {...state, user: action.payload.data}
    case FETCH_PROFESSIONS:
      return {...state, prof: action.payload.data}
    case FETCH_PROFESSION:
      return {...state, profession: action.payload.data}
  default:
      return state;
  }
}
