import dayjs from 'dayjs';
import { ACTION_TYPES, DAY } from '../../shared/constants';
import {
  pendingAppointmentReducer as reducer,
  clearSelectedDate,
  clearSelectedDayPart,
  clearSelectedTimeId,
  saveSelectedDate,
  saveSelectedDayPart,
  saveSelectedTimeID,
  getSelectedDate,
  getSelectedDayPart,
  getSelectedTimeID,
} from './pendingAppointment';

const initialState = {
  selectedDate: new Date(0),
  selectedDayPart: DAY.MORNING,
  selectedTimeID: '',
};

//////// Reducer ////////
describe('pendingAppointmentReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CLEAR_SELECTED_TIME_ID', () => {
    const action = { type: ACTION_TYPES.CLEAR_SELECTED_TIME_ID };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      selectedTimeID: '',
    });
  });

  it('should handle CLEAR_SELECTED_DATE', () => {
    const action = { type: ACTION_TYPES.CLEAR_SELECTED_DATE };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      selectedDate: new Date(0),
    });
  });

  it('should handle CLEAR_SELECTED_DAY_PART', () => {
    const action = { type: ACTION_TYPES.CLEAR_SELECTED_DAY_PART };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      selectedDayPart: DAY.MORNING,
    });
  });

  it('should handle SAVE_SELECTED_DATE', () => {
    const selectedDate = dayjs().add(1, 'day');
    const action = {
      type: ACTION_TYPES.SAVE_SELECTED_DATE,
      payload: { selectedDate },
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      selectedDate,
    });
  });

  it('should handle SAVE_SELECTED_DAY_PART', () => {
    const selectedDayPart = DAY.AFTERNOON;
    const action = {
      type: ACTION_TYPES.SAVE_SELECTED_DAY_PART,
      payload: { selectedDayPart },
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      selectedDayPart,
    });
  });

  it('should handle SAVE_SELECTED_TIME_ID', () => {
    const selectedTimeID = 'someTimeID';
    const action = {
      type: ACTION_TYPES.SAVE_SELECTED_TIME_ID,
      payload: { selectedTimeID },
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      selectedTimeID,
    });
  });
});

//////// Actions ////////
describe('pendingAppointment actions', () => {
  it('validate clearSelectedDate', () => {
    const expectedAction = {
      type: ACTION_TYPES.CLEAR_SELECTED_DATE,
    };
    expect(clearSelectedDate()).toEqual(expectedAction);
  });

  it('validate clearSelectedDayPart', () => {
    const expectedAction = {
      type: ACTION_TYPES.CLEAR_SELECTED_DAY_PART,
    };
    expect(clearSelectedDayPart()).toEqual(expectedAction);
  });

  it('validate clearSelectedTimeId', () => {
    const expectedAction = {
      type: ACTION_TYPES.CLEAR_SELECTED_TIME_ID,
    };
    expect(clearSelectedTimeId()).toEqual(expectedAction);
  });

  it('validate saveSelectedDate', () => {
    const selectedDate = new Date('2023-11-08');
    const expectedAction = {
      type: ACTION_TYPES.SAVE_SELECTED_DATE,
      payload: { selectedDate },
    };
    expect(saveSelectedDate(selectedDate)).toEqual(expectedAction);
  });

  it('validate saveSelectedDayPart', () => {
    const selectedDayPart = DAY.EVENING;
    const expectedAction = {
      type: ACTION_TYPES.SAVE_SELECTED_DAY_PART,
      payload: { selectedDayPart },
    };
    expect(saveSelectedDayPart(selectedDayPart)).toEqual(expectedAction);
  });

  it('validate saveSelectedTimeID', () => {
    const selectedTimeID = 'some-id-1245';
    const expectedAction = {
      type: ACTION_TYPES.SAVE_SELECTED_TIME_ID,
      payload: { selectedTimeID },
    };
    expect(saveSelectedTimeID(selectedTimeID)).toEqual(expectedAction);
  });
});

//////// Selector ////////
describe('pendingAppointment selectors', () => {
  it('selector getSelectedDate returns the correct value', () => {
    const tmpDate = new Date('2023-01-02');
    const state = {
      pendingAppointmentReducer: {
        selectedDate: tmpDate,
      },
    };
    expect(getSelectedDate(state)).toEqual(tmpDate);
  });

  it('selector getSelectedDayPart returns the correct day constant', () => {
    const state = {
      pendingAppointmentReducer: {
        selectedDayPart: DAY.AFTERNOON,
      },
    };
    expect(getSelectedDayPart(state)).toBe(DAY.AFTERNOON);
  });

  it('selector getSelectedTimeID returns the correct day constant', () => {
    const timeId = 'xyz-3456-12';
    const state = {
      pendingAppointmentReducer: {
        selectedTimeID: timeId,
      },
    };
    expect(getSelectedTimeID(state)).toBe(timeId);
  });
});
