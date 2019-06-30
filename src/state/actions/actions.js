import * as constants from '../../shared/constants';
import { fetchSchedule } from '../../shared/apiRequester';
import * as dateHelper from '../../shared/dateHelper';

export function clearHasAfternoonTime() {
  return {
    type: constants.CLEAR_HAS_AFTERNOON_TIME,
    payload: {}
  };
}

export function clearHasEveningTime() {
  return {
    type: constants.CLEAR_HAS_EVENING_TIME,
    payload: {}
  };
}

export function clearHasMorningTime() {
  return {
    type: constants.CLEAR_HAS_MORNING_TIME,
    payload: {}
  };
}

export function clearSchedules() {
  return {
    type: constants.CLEAR_SCHEDULES,
    payload: {}
  };
}

export function clearSelectedDate() {
  return {
    type: constants.CLEAR_SELECTED_DATE,
    payload: {}
  };
}

export function clearSelectedDayPart() {
  return {
    type: constants.CLEAR_SELECTED_DAY_PART,
    payload: {}
  };
}

export function saveHasAfternoonTime(hasAfternoonTime) {
  return {
    type: constants.SAVE_HAS_AFTERNOON_TIME,
    payload: { hasAfternoonTime }
  };
}

export function saveHasEveningTime(hasEveningTime) {
  return {
    type: constants.SAVE_HAS_EVENING_TIME,
    payload: { hasEveningTime }
  };
}

export function saveHasMorningTime(hasMorningTime) {
  return {
    type: constants.SAVE_HAS_MORNING_TIME,
    payload: { hasMorningTime }
  };
}

export function saveSchedules(schedules) {
  return {
    type: constants.SAVE_SCHEDULES,
    payload: { schedules }
  };
}

export function saveSelectedDate(selectedDate) {
  return {
    type: constants.SAVE_SELECTED_DATE,
    payload: { selectedDate }
  };
}

export function saveSelectedDayPart(selectedDayPart) {
  return {
    type: constants.SAVE_SELECTED_DAY_PART,
    payload: { selectedDayPart }
  };
}

export function saveSelectedTimeID(selectedTimeID) {
  return {
    type: constants.SAVE_SELECTED_TIME_ID,
    payload: { selectedTimeID }
  };
}

export function toggleShowingCalendar(showingCalendar) {
  return {
    type: constants.TOGGLE_SHOWING_CALENDAR,
    payload: { showingCalendar }
  };
}

export function toggleShowingProfile(showingProfile) {
  return {
    type: constants.TOGGLE_SHOWING_PROFILE,
    payload: { showingProfile }
  };
}

export function toFetchSchedules(date) {
  return dispatch => {
    return fetchSchedule(date)
      .then(list => {
        dispatch(saveSchedules(list));
        const hasMorning = dateHelper.hasMorningTimeInSchedules(list);
        dispatch(saveHasMorningTime(hasMorning));
        const hasAfternoon = dateHelper.hasAfternoonTimeInSchedules(list);
        dispatch(saveHasAfternoonTime(hasAfternoon));
        const hasEvening = dateHelper.hasEveningTimeInSchedules(list);
        dispatch(saveHasEveningTime(hasEvening));
      })
      .catch(err => {
        console.log('Failed to fetch schedule: ', err);
        dispatch(clearSchedules());
      });
  };
}
