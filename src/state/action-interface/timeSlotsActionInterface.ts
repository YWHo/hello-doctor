import { ACTION_TYPES } from '../../shared/constants';
import { TimeSlotState } from '../state-interface';

export interface ClearSchedulesAction {
  type: ACTION_TYPES.CLEAR_SCHEDULES;
}

export interface SaveSchedulesAction {
  type: ACTION_TYPES.SAVE_SCHEDULES;
  payload: TimeSlotState;
}
