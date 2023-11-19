import type { AnyAction, Dispatch } from 'redux';
import dayjs from 'dayjs';
import { ACTION_TYPES } from '../../shared/constants';
import { fetchSchedule } from '../../shared/apiRequester';
import { TimeSlotState } from '../state-interface';
import * as dateHelper from '../../shared/dateHelper';

export function clearSchedules() {
  return {
    type: ACTION_TYPES.CLEAR_SCHEDULES,
  };
}

export function saveSchedules(scheduleObj: TimeSlotState) {
  return {
    type: ACTION_TYPES.SAVE_SCHEDULES,
    payload: { ...scheduleObj },
  };
}

export function toFetchSchedules(date: Date | dayjs.Dayjs) {
  return (dispatch: Dispatch<AnyAction>) => {
    return fetchSchedule(date)
      .then((list) => {
        const hasAfternoonTime = dateHelper.hasAfternoonTimeInSchedules(list);
        const hasEveningTime = dateHelper.hasEveningTimeInSchedules(list);
        const hasMorningTime = dateHelper.hasMorningTimeInSchedules(list);
        dispatch(
          saveSchedules({
            hasAfternoonTime,
            hasEveningTime,
            hasMorningTime,
            schedules: list,
          }),
        );
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== 'test') {
          console.log('Failed to fetch schedule: ', err);
        }
        dispatch(clearSchedules());
      });
  };
}
