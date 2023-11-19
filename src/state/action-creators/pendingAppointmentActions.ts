import dayjs from 'dayjs';
import { ACTION_TYPES, DAY } from '../../shared/constants';

export function clearSelectedDate() {
  return {
    type: ACTION_TYPES.CLEAR_SELECTED_DATE,
  };
}

export function clearSelectedDayPart() {
  return {
    type: ACTION_TYPES.CLEAR_SELECTED_DAY_PART,
  };
}

export function clearSelectedTimeId() {
  return {
    type: ACTION_TYPES.CLEAR_SELECTED_TIME_ID,
  };
}

export function saveSelectedDate(selectedDate: Date | dayjs.Dayjs) {
  return {
    type: ACTION_TYPES.SAVE_SELECTED_DATE,
    payload: { selectedDate },
  };
}

export function saveSelectedDayPart(selectedDayPart: DAY) {
  return {
    type: ACTION_TYPES.SAVE_SELECTED_DAY_PART,
    payload: { selectedDayPart },
  };
}

export function saveSelectedTimeID(selectedTimeID: string) {
  return {
    type: ACTION_TYPES.SAVE_SELECTED_TIME_ID,
    payload: { selectedTimeID },
  };
}
