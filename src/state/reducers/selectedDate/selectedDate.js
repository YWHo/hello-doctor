import dayjs from 'dayjs';
import {
  CLEAR_SELECTED_DATE,
  SAVE_SELECTED_DATE
} from '../../../shared/constants';

const initialState = dayjs();

export default function selectedDate(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case CLEAR_SELECTED_DATE:
      return initialState;
    case SAVE_SELECTED_DATE:
      return payload.selectedDate;
    default:
      return state;
  }
}
