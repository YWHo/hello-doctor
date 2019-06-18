import * as constants from '../../shared/constants';
import { fetchSchedule } from '../../shared/apiRequester';

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

export function toFetchSchedules(date) {
  return dispatch => {
    return fetchSchedule(date)
      .then(json => {
        dispatch(saveSchedules(json));
      })
      .catch(err => {
        console.log('Failed to fetch schedule: ', err);
        dispatch(clearSchedules());
      });
  };
}
