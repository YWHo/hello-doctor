import { ACTION_TYPES } from '../../shared/constants';

//////// Reducer ////////
const initialState = {
  showingCalendar: false,
  showingProfile: false,
};

export function uiShowReducer(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case ACTION_TYPES.TOGGLE_SHOWING_CALENDAR:
      return { ...state, showingCalendar: payload.showingCalendar };
    case ACTION_TYPES.TOGGLE_SHOWING_PROFILE:
      return { ...state, showingProfile: payload.showingProfile };
    default:
      return state;
  }
}

//////// Actions ////////
export function toggleShowingCalendar(showingCalendar) {
  return {
    type: ACTION_TYPES.TOGGLE_SHOWING_CALENDAR,
    payload: { showingCalendar },
  };
}

export function toggleShowingProfile(showingProfile) {
  return {
    type: ACTION_TYPES.TOGGLE_SHOWING_PROFILE,
    payload: { showingProfile },
  };
}

//////// Selector ////////
export function getShowingCalendar({ uiShowReducer }) {
  return uiShowReducer?.showingCalendar;
}

export function getShowingProfile({ uiShowReducer }) {
  return uiShowReducer?.showingProfile;
}
