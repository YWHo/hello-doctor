import { combineReducers } from 'redux';
import hasAfternoonTime from './hasAfternoonTime';
import hasEveningTime from './hasEveningTime';
import hasMorningTime from './hasMorningTime';
import schedules from './schedules';
import selectedDate from './selectedDate';
import selectedDayPart from './selectedDayPart';

export default combineReducers({
  hasAfternoonTime,
  hasEveningTime,
  hasMorningTime,
  schedules,
  selectedDate,
  selectedDayPart
});
