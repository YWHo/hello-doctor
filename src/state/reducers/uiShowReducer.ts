import { ACTION_TYPES } from '../../shared/constants';
import { IAction } from '../action-interface';
import { UiShowState } from '../state-interface';

const initialState: UiShowState = {
  showingCalendar: false,
  showingProfile: false,
};

export default function uiShowReducer(
  state: UiShowState = initialState,
  action: IAction,
): UiShowState {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_SHOWING_CALENDAR:
      return { ...state, showingCalendar: action.payload.showingCalendar };
    case ACTION_TYPES.TOGGLE_SHOWING_PROFILE:
      return { ...state, showingProfile: action.payload.showingProfile };
    default:
      return state;
  }
}
