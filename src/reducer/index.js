import {combineReducers} from 'redux';
import programs from '../features/programs/programsReducer';

const rootReducer = combineReducers({
  programs
});

export default rootReducer;
