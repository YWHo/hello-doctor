import {
  CLEAR_HAS_AFTERNOON_TIME,
  SAVE_HAS_AFTERNOON_TIME
} from '../../../shared/constants';

const initialState = false;

export default function hasAfternoonTime(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case CLEAR_HAS_AFTERNOON_TIME:
      return initialState;
    case SAVE_HAS_AFTERNOON_TIME:
      return payload.hasAfternoonTime;
    default:
      return state;
  }
}
