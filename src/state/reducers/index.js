import { combineReducers } from 'redux';
import hasAfternoonTime from './hasAfternoonTime';
import hasEveningTime from './hasEveningTime';
import hasMorningTime from './hasMorningTime';
import providerProfile from './providerProfile';
import schedules from './schedules';
import selectedDate from './selectedDate';
import selectedDayPart from './selectedDayPart';
import selectedTimeID from './selectedTimeID';
import showingCalendar from './showingCalendar';
import showingProfile from './showingProfile';

export default combineReducers({
  hasAfternoonTime,
  hasEveningTime,
  hasMorningTime,
  providerProfile,
  schedules,
  selectedDate,
  selectedDayPart,
  selectedTimeID,
  showingCalendar,
  showingProfile,
});
