import { CLEAR_SCHEDULES, SAVE_SCHEDULES } from '../../shared/constants';
import { fetchSchedule } from '../../shared/apiRequester';

export function clearSchedules() {
  return {
    type: CLEAR_SCHEDULES,
    payload: {}
  };
}

export function saveSchedules(schedules) {
  return {
    type: SAVE_SCHEDULES,
    payload: { schedules }
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
