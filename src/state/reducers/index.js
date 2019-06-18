import { combineReducers } from 'redux';
import schedules from './schedules';
import selectedDate from './selectedDate';

export default combineReducers({
  schedules,
  selectedDate
});
