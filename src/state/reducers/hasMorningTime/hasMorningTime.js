import {
  CLEAR_HAS_MORNING_TIME,
  SAVE_HAS_MORNING_TIME
} from '../../../shared/constants';

const initialState = false;

export default function hasMorningTime(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case CLEAR_HAS_MORNING_TIME:
      return initialState;
    case SAVE_HAS_MORNING_TIME:
      return payload.hasMorningTime;
    default:
      return state;
  }
}
