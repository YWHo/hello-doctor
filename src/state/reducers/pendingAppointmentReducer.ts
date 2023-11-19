import { ACTION_TYPES, DAY } from '../../shared/constants';
import { IAction } from '../action-interface';
import { PendingAppointmentState } from '../state-interface';

const initialState: PendingAppointmentState = {
  selectedDate: new Date(0),
  selectedDayPart: DAY.MORNING,
  selectedTimeID: '',
};

export default function pendingAppointmentReducer(
  state: PendingAppointmentState = initialState,
  action: IAction,
): PendingAppointmentState {
  switch (action.type) {
    case ACTION_TYPES.CLEAR_SELECTED_DATE:
      return { ...state, selectedDate: new Date(0) };
    case ACTION_TYPES.CLEAR_SELECTED_DAY_PART:
      return { ...state, selectedDayPart: DAY.MORNING };
    case ACTION_TYPES.CLEAR_SELECTED_TIME_ID:
      return { ...state, selectedTimeID: '' };
    case ACTION_TYPES.SAVE_SELECTED_DATE:
      return { ...state, selectedDate: action.payload.selectedDate };
    case ACTION_TYPES.SAVE_SELECTED_DAY_PART:
      return { ...state, selectedDayPart: action.payload.selectedDayPart };
    case ACTION_TYPES.SAVE_SELECTED_TIME_ID:
      return { ...state, selectedTimeID: action.payload.selectedTimeID };
    default:
      return state;
  }
}
