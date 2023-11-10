import {
  getShowingCalendar,
  getShowingProfile,
  toggleShowingCalendar,
  toggleShowingProfile,
  uiShowReducer,
} from './uiShow';
import { ACTION_TYPES } from '../../shared/constants';

//////// Reducer ////////
const initialState = {
  showingCalendar: false,
  showingProfile: false,
};

describe('uiShowReducer', () => {
  it('should return the initial state', () => {
    expect(uiShowReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_SHOWING_CALENDAR', () => {
    const action = {
      type: ACTION_TYPES.TOGGLE_SHOWING_CALENDAR,
      payload: { showingCalendar: true },
    };
    expect(uiShowReducer(initialState, action)).toEqual({
      ...initialState,
      showingCalendar: true,
    });
  });

  it('should handle TOGGLE_SHOWING_PROFILE', () => {
    const action = {
      type: ACTION_TYPES.TOGGLE_SHOWING_PROFILE,
      payload: { showingProfile: true },
    };
    expect(uiShowReducer(initialState, action)).toEqual({
      ...initialState,
      showingProfile: true,
    });
  });

  it('should handle unknown action type', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const currentState = {
      showingCalendar: true,
      showingProfile: false,
    };
    expect(uiShowReducer(currentState, action)).toEqual(currentState);
  });
});

//////// Actions ////////
describe('uiShow actions', () => {
  it('toggleShowingCalendar should create an action to toggle showing calendar', () => {
    const showingCalendar = true;
    const expectedAction = {
      type: ACTION_TYPES.TOGGLE_SHOWING_CALENDAR,
      payload: { showingCalendar },
    };
    expect(toggleShowingCalendar(showingCalendar)).toEqual(expectedAction);
  });

  it('toggleShowingProfile should create an action to toggle showing profile', () => {
    const showingProfile = false;
    const expectedAction = {
      type: ACTION_TYPES.TOGGLE_SHOWING_PROFILE,
      payload: { showingProfile },
    };
    expect(toggleShowingProfile(showingProfile)).toEqual(expectedAction);
  });
});

//////// Selector ////////
describe('uiShow selectors', () => {
  describe('getShowingCalendar', () => {
    it('should return showingCalendar from uiShowReducer', () => {
      const mockState = {
        uiShowReducer: {
          showingCalendar: true,
          showingProfile: false,
        },
      };

      const result = getShowingCalendar(mockState);
      expect(result).toBe(true);
    });

    it('should handle undefined uiShowReducer', () => {
      const mockState = {
        // No uiShowReducer in the state
      };

      const result = getShowingCalendar(mockState);
      expect(result).toBeUndefined();
    });
  });

  describe('getShowingProfile', () => {
    it('should return showingProfile from uiShowReducer', () => {
      const mockState = {
        uiShowReducer: {
          showingCalendar: false,
          showingProfile: true,
        },
      };

      const result = getShowingProfile(mockState);
      expect(result).toBe(true);
    });

    it('should handle undefined uiShowReducer', () => {
      const mockState = {
        // No uiShowReducer in the state
      };

      const result = getShowingProfile(mockState);
      expect(result).toBeUndefined();
    });
  });
});
