import {SIDO_SELECTED} from '../actions';

export default function (state = null, action) {
  switch(action.type) {
  case SIDO_SELECTED:
    return action.payload;
  }

  return state;
}