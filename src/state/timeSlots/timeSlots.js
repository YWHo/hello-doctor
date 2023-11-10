import * as dateHelper from '../../shared/dateHelper';
import { fetchSchedule } from '../../shared/apiRequester';
import { ACTION_TYPES } from '../../shared/constants';

//////// Reducer ////////
const initialState = {
  hasAfternoonTime: false,
  hasEveningTime: false,
  hasMorningTime: false,
  schedules: [],
};

export function timeSlotsReducer(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case ACTION_TYPES.CLEAR_SCHEDULES:
      return { ...initialState, schedules: [] };
    case ACTION_TYPES.SAVE_SCHEDULES:
      return {
        hasAfternoonTime: payload.hasAfternoonTime,
        hasEveningTime: payload.hasEveningTime,
        hasMorningTime: payload.hasMorningTime,
        schedules: payload.schedules,
      };
    default:
      return state;
  }
}

//////// Actions ////////
export function clearSchedules() {
  return {
    type: ACTION_TYPES.CLEAR_SCHEDULES,
  };
}

export function saveSchedules(scheduleObj) {
  const { hasAfternoonTime, hasEveningTime, hasMorningTime, schedules } =
    scheduleObj;
  return {
    type: ACTION_TYPES.SAVE_SCHEDULES,
    payload: {
      hasAfternoonTime,
      hasEveningTime,
      hasMorningTime,
      schedules,
    },
  };
}

//////// Async Actions ////////
export function toFetchSchedules(date) {
  return (dispatch) => {
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

//////// Selector ////////
export function getHasAfternoonTime({ timeSlotsReducer }) {
  const { hasAfternoonTime } = timeSlotsReducer || {};
  return hasAfternoonTime;
}

export function getHasEveningTime({ timeSlotsReducer }) {
  const { hasEveningTime } = timeSlotsReducer || {};
  return hasEveningTime;
}

export function getHasMorningTime({ timeSlotsReducer }) {
  const { hasMorningTime } = timeSlotsReducer || {};
  return hasMorningTime;
}

export function getSchedules({ timeSlotsReducer }) {
  const { schedules } = timeSlotsReducer || {};
  return schedules;
}
