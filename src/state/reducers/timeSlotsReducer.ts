import { ACTION_TYPES } from '../../shared/constants';
import { IAction } from '../action-interface';
import { TimeSlotState } from '../state-interface';

const initialState: TimeSlotState = {
  hasAfternoonTime: false,
  hasEveningTime: false,
  hasMorningTime: false,
  schedules: [],
};

export default function timeSlotsReducer(
  state: TimeSlotState = initialState,
  action: IAction,
): TimeSlotState {
  switch (action.type) {
    case ACTION_TYPES.CLEAR_SCHEDULES:
      return { ...initialState, schedules: [] };
    case ACTION_TYPES.SAVE_SCHEDULES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
