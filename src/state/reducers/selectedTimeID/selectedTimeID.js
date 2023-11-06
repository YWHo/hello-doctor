import {
  CLEAR_SELECTED_TIME_ID,
  SAVE_SELECTED_TIME_ID,
} from '../../../shared/constants';

const initialState = '';

export default function selectedTimeID(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case CLEAR_SELECTED_TIME_ID:
      return initialState;
    case SAVE_SELECTED_TIME_ID:
      return payload.selectedTimeID;
    default:
      return state;
  }
}
