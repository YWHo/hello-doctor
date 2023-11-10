import { ACTION_TYPES, DAY } from '../../shared/constants';

//////// Reducer ////////
const initialState = {
  selectedDate: new Date(0),
  selectedDayPart: DAY.MORNING,
  selectedTimeID: '',
};

export function pendingAppointmentReducer(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case ACTION_TYPES.CLEAR_SELECTED_DATE:
      return { ...state, selectedDate: new Date(0) };
    case ACTION_TYPES.CLEAR_SELECTED_DAY_PART:
      return { ...state, selectedDayPart: DAY.MORNING };
    case ACTION_TYPES.CLEAR_SELECTED_TIME_ID:
      return { ...state, selectedTimeID: '' };
    case ACTION_TYPES.SAVE_SELECTED_DATE:
      return { ...state, selectedDate: payload.selectedDate };
    case ACTION_TYPES.SAVE_SELECTED_DAY_PART:
      return { ...state, selectedDayPart: payload.selectedDayPart };
    case ACTION_TYPES.SAVE_SELECTED_TIME_ID:
      return { ...state, selectedTimeID: payload.selectedTimeID };
    default:
      return state;
  }
}

//////// Actions ////////
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

export function saveSelectedDate(selectedDate) {
  return {
    type: ACTION_TYPES.SAVE_SELECTED_DATE,
    payload: { selectedDate },
  };
}

export function saveSelectedDayPart(selectedDayPart) {
  return {
    type: ACTION_TYPES.SAVE_SELECTED_DAY_PART,
    payload: { selectedDayPart },
  };
}

export function saveSelectedTimeID(selectedTimeID) {
  return {
    type: ACTION_TYPES.SAVE_SELECTED_TIME_ID,
    payload: { selectedTimeID },
  };
}

//////// Selector ////////
export function getSelectedDate({ pendingAppointmentReducer }) {
  const { selectedDate } = pendingAppointmentReducer || {};
  return selectedDate;
}

export function getSelectedDayPart({ pendingAppointmentReducer }) {
  const { selectedDayPart } = pendingAppointmentReducer || {};
  return selectedDayPart;
}

export function getSelectedTimeID({ pendingAppointmentReducer }) {
  const { selectedTimeID } = pendingAppointmentReducer || {};
  return selectedTimeID;
}
