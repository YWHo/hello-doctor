import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchSchedule } from '../../shared/apiRequester';
import * as dateHelper from '../../shared/dateHelper';
import {
  clearSchedules,
  getHasAfternoonTime,
  getHasEveningTime,
  getHasMorningTime,
  getSchedules,
  saveSchedules,
  timeSlotsReducer,
  toFetchSchedules,
} from './timeSlots';
import { ACTION_TYPES } from '../../shared/constants';

jest.mock('../../shared/apiRequester');
jest.mock('../../shared/dateHelper');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

//////// Reducer ////////
const initialState = {
  hasAfternoonTime: false,
  hasEveningTime: false,
  hasMorningTime: false,
  schedules: [],
};

describe('timeSlotsReducer', () => {
  it('should return the initial state', () => {
    expect(timeSlotsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CLEAR_SCHEDULES', () => {
    const currentState = {
      hasAfternoonTime: true,
      hasEveningTime: true,
      hasMorningTime: true,
      schedules: [{ id: 1, time: '10:00 AM' }],
    };
    const action = { type: ACTION_TYPES.CLEAR_SCHEDULES };
    expect(timeSlotsReducer(currentState, action)).toEqual({
      hasAfternoonTime: false,
      hasEveningTime: false,
      hasMorningTime: false,
      schedules: [],
    });
  });

  it('should handle SAVE_SCHEDULES', () => {
    const action = {
      type: ACTION_TYPES.SAVE_SCHEDULES,
      payload: {
        hasAfternoonTime: true,
        hasEveningTime: true,
        hasMorningTime: true,
        schedules: [{ id: 1, time: '10:00 AM' }],
      },
    };
    expect(timeSlotsReducer(initialState, action)).toEqual({
      hasAfternoonTime: true,
      hasEveningTime: true,
      hasMorningTime: true,
      schedules: [{ id: 1, time: '10:00 AM' }],
    });
  });

  it('should handle unknown action type', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const currentState = {
      hasAfternoonTime: true,
      hasEveningTime: false,
      hasMorningTime: true,
      schedules: [],
    };
    expect(timeSlotsReducer(currentState, action)).toEqual(currentState);
  });
});

//////// Actions ////////
describe('timeSlots actions', () => {
  it('clearSchedules should create an action to clear schedules', () => {
    const expectedAction = {
      type: ACTION_TYPES.CLEAR_SCHEDULES,
    };
    expect(clearSchedules()).toEqual(expectedAction);
  });

  it('saveSchedules should create an action to save schedules', () => {
    const scheduleObj = {
      hasAfternoonTime: true,
      hasEveningTime: false,
      hasMorningTime: true,
      schedules: [{ id: 1, time: '10:00 AM' }],
    };
    const expectedAction = {
      type: ACTION_TYPES.SAVE_SCHEDULES,
      payload: scheduleObj,
    };
    expect(saveSchedules(scheduleObj)).toEqual(expectedAction);
  });
});

//////// Async Actions ////////
describe('toFetchSchedules', () => {
  it('dispatches saveSchedules on successful fetch', () => {
    const date = '2023-11-10';
    const list = [{ id: 1, time: '10:00 AM' }];

    // Mock the fetchSchedule function to return a resolved promise with the schedule list
    fetchSchedule.mockResolvedValue(list);

    // Mock the dateHelper functions to return true for all time periods
    dateHelper.hasAfternoonTimeInSchedules.mockReturnValue(true);
    dateHelper.hasEveningTimeInSchedules.mockReturnValue(true);
    dateHelper.hasMorningTimeInSchedules.mockReturnValue(true);

    const expectedActions = [
      {
        type: 'SAVE_SCHEDULES',
        payload: {
          hasAfternoonTime: true,
          hasEveningTime: true,
          hasMorningTime: true,
          schedules: list,
        },
      },
    ];

    const store = mockStore({});

    return store.dispatch(toFetchSchedules(date)).then(() => {
      // Return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches clearSchedules on fetch failure', () => {
    const date = '2023-11-10';

    // Mock the fetchSchedule function to return a rejected promise
    fetchSchedule.mockRejectedValue('Fetch error');

    const expectedActions = [{ type: 'CLEAR_SCHEDULES' }];

    const store = mockStore({});

    return store.dispatch(toFetchSchedules(date)).then(() => {
      // Return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

//////// Selector ////////
describe('timeSlots selectors', () => {
  it('getHasAfternoonTime should return false', () => {
    const state = {
      timeSlotsReducer: {
        hasAfternoonTime: false,
      },
    };
    expect(getHasAfternoonTime(state)).toBeFalsy();
  });

  it('getHasAfternoonTime should return true', () => {
    const state = {
      timeSlotsReducer: {
        hasAfternoonTime: true,
      },
    };
    expect(getHasAfternoonTime(state)).toBeTruthy();
  });

  it('getHasEveningTime should return false', () => {
    const state = {
      timeSlotsReducer: {
        hasEveningTime: false,
      },
    };
    expect(getHasEveningTime(state)).toBeFalsy();
  });

  it('getHasEveningTime should return true', () => {
    const state = {
      timeSlotsReducer: {
        hasEveningTime: true,
      },
    };
    expect(getHasEveningTime(state)).toBeTruthy();
  });

  it('getHasMorningTime should return false', () => {
    const state = {
      timeSlotsReducer: {
        hasMorningTime: false,
      },
    };
    expect(getHasMorningTime(state)).toBeFalsy();
  });

  it('getHasMorningTime should return true', () => {
    const state = {
      timeSlotsReducer: {
        hasMorningTime: true,
      },
    };
    expect(getHasMorningTime(state)).toBeTruthy();
  });

  it('getSchedules should return the schedules', () => {
    const tmpSchedules = [
      { name: 'Jon', appointment: 'Morning' },
      { name: '', appointment: 'Noon' },
    ];
    const state = {
      timeSlotsReducer: {
        schedules: tmpSchedules,
      },
    };

    expect(getSchedules(state)).toEqual(tmpSchedules);
  });
});
