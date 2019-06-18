import { combineReducers } from 'redux';
import schedules from './schedules';
import selectedDate from './selectedDate';
import selectedDayPart from './selectedDayPart';

export default combineReducers({
  schedules,
  selectedDate,
  selectedDayPart
});
