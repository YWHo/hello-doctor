import { ACTION_TYPES } from '../../shared/constants';
import { PendingAppointmentState } from '../state-interface';

export interface ClearSelectedDateAction {
  type: ACTION_TYPES.CLEAR_SELECTED_DATE;
}

export interface ClearSelectedDayPartAction {
  type: ACTION_TYPES.CLEAR_SELECTED_DAY_PART;
}

export interface ClearSelectedTimeIdAction {
  type: ACTION_TYPES.CLEAR_SELECTED_TIME_ID;
}

export interface SaveSelectedDateAction {
  type: ACTION_TYPES.SAVE_SELECTED_DATE;
  payload: PendingAppointmentState;
}

export interface SaveSelectedDayPartAction {
  type: ACTION_TYPES.SAVE_SELECTED_DAY_PART;
  payload: PendingAppointmentState;
}

export interface SaveSelectedTimeIDAction {
  type: ACTION_TYPES.SAVE_SELECTED_TIME_ID;
  payload: PendingAppointmentState;
}
