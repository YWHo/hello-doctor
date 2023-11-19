import { ACTION_TYPES } from '../../shared/constants';
import { UiShowState } from '../state-interface';

export interface ToggleShowingCalendarAction {
  type: ACTION_TYPES.TOGGLE_SHOWING_CALENDAR;
  payload: UiShowState;
}

export interface ToggleShowingProfileAction {
  type: ACTION_TYPES.TOGGLE_SHOWING_PROFILE;
  payload: UiShowState;
}
