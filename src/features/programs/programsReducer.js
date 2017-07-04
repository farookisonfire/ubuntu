import {programs} from '../../reducer/initialState';

export default function programsReducer(state = programs, action) {
  switch(action.type) {
    case 'REQUEST_PROGRAMS':
      return action.programs;
    default:
      return state;
  }
}
