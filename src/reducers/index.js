import { combineReducers } from 'redux';
import sidos from './sidos_reducer';
import selected from './selected_reducer';

const rootReducer = combineReducers({
  sidos,
  selected
});

export default rootReducer;