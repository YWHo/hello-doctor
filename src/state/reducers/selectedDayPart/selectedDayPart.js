import {
  CLEAR_SELECTED_DAY_PART,
  DAY_MORNING,
  SAVE_SELECTED_DAY_PART
} from '../../../shared/constants';

const initialState = DAY_MORNING;

export default function selectedDayPart(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case CLEAR_SELECTED_DAY_PART:
      return initialState;
    case SAVE_SELECTED_DAY_PART:
      return payload.selectedDayPart;
    default:
      return state;
  }
}
