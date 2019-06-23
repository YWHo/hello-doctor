import { TOGGLE_SHOWING_CALENDAR } from '../../../shared/constants';

const initialState = false;

export default function showingCalendar(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case TOGGLE_SHOWING_CALENDAR:
      return payload.showingCalendar;
    default:
      return state;
  }
}
