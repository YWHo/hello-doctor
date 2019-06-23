import { combineReducers } from 'redux';
import hasAfternoonTime from './hasAfternoonTime';
import hasEveningTime from './hasEveningTime';
import hasMorningTime from './hasMorningTime';
import schedules from './schedules';
import selectedDate from './selectedDate';
import selectedDayPart from './selectedDayPart';
import selectedTimeID from './selectedTimeID';
import showingCalendar from './showingCalendar';

export default combineReducers({
  hasAfternoonTime,
  hasEveningTime,
  hasMorningTime,
  schedules,
  selectedDate,
  selectedDayPart,
  selectedTimeID,
  showingCalendar
});
