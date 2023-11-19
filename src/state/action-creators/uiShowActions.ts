import { ACTION_TYPES } from '../../shared/constants';

export function toggleShowingCalendar(showingCalendar: boolean) {
  return {
    type: ACTION_TYPES.TOGGLE_SHOWING_CALENDAR,
    payload: { showingCalendar },
  };
}

export function toggleShowingProfile(showingProfile: boolean) {
  return {
    type: ACTION_TYPES.TOGGLE_SHOWING_PROFILE,
    payload: { showingProfile },
  };
}
