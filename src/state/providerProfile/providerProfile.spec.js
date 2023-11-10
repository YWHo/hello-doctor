import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchProvider } from '../../shared/apiRequester';
import { ACTION_TYPES } from '../../shared/constants';
import {
  clearProviderProfile,
  getProviderProfile,
  saveProviderProfile,
  providerProfileReducer,
  toFetchProvider,
} from './providerProfile';

jest.mock('../../shared/apiRequester'); // Mock the API file

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

//////// Reducer ////////
const initialState = {
  Id: '',
  Name: '',
  Title: '',
  Description: '',
  Languages: [],
  Degrees: [],
  PictureURL: '',
};

describe('providerProfileReducer', () => {
  it('should return the initial state', () => {
    expect(providerProfileReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CLEAR_PROVIDER_PROFILE', () => {
    const currentState = {
      Id: '1234-34234-039434',
      Name: 'John Doe',
      Title: 'Doctor',
      Description: 'Medical professional',
      Languages: ['English', 'Spanish'],
      Degrees: ['MD'],
      PictureURL: 'https://abc.com/xy/mv/36/dig/df.jpg',
    };
    const action = { type: ACTION_TYPES.CLEAR_PROVIDER_PROFILE };
    expect(providerProfileReducer(currentState, action)).toEqual(initialState);
  });

  it('should handle SAVE_PROVIDER_PROFILE', () => {
    const providerProfile = {
      Id: '8394-2934-39435',
      Name: 'Jane Doe',
      Title: 'Nurse',
      Description: 'Healthcare professional',
      Languages: ['French', 'German'],
      Degrees: ['RN'],
      PictureURL: 'newURL',
    };
    const action = {
      type: ACTION_TYPES.SAVE_PROVIDER_PROFILE,
      payload: { providerProfile },
    };
    expect(providerProfileReducer(initialState, action)).toEqual(
      providerProfile,
    );
  });

  it('should handle unknown action type', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const currentState = {
      Id: 'someId',
      Name: 'John Doe',
      Title: 'Doctor',
      Description: 'Medical professional',
      Languages: ['English', 'Spanish'],
      Degrees: ['MD'],
      PictureURL: 'someURL',
    };
    expect(providerProfileReducer(currentState, action)).toEqual(currentState);
  });
});

//////// Actions ////////
describe('providerProfile actions', () => {
  it('clearProviderProfile should create an action to clear provider profile', () => {
    const expectedAction = {
      type: ACTION_TYPES.CLEAR_PROVIDER_PROFILE,
    };
    expect(clearProviderProfile()).toEqual(expectedAction);
  });

  it('should create an action to save provider profile', () => {
    const providerProfile = {
      Id: 'someId',
      Name: 'John Doe',
      Title: 'Doctor',
      Description: 'Medical professional',
      Languages: ['English', 'Spanish'],
      Degrees: ['MD'],
      PictureURL: 'someURL',
    };
    const expectedAction = {
      type: ACTION_TYPES.SAVE_PROVIDER_PROFILE,
      payload: { providerProfile },
    };
    expect(saveProviderProfile(providerProfile)).toEqual(expectedAction);
  });
});

//////// Async Actions ////////
describe('toFetchProvider', () => {
  it('dispatches saveProviderProfile on successful fetch', () => {
    const id = '12-039405958-345';
    const providerProfile = {
      Id: id,
      Name: 'John Doe',
      Title: 'Doctor',
      Description: 'Medical professional',
      Languages: ['English', 'Spanish'],
      Degrees: ['MD'],
      PictureURL: 'someURL',
    };

    // Mock the fetchProvider function to return a resolved promise with providerProfile
    fetchProvider.mockResolvedValue(providerProfile);

    const expectedActions = [
      {
        type: ACTION_TYPES.SAVE_PROVIDER_PROFILE,
        payload: { providerProfile },
      },
    ];

    const store = mockStore({});

    return store.dispatch(toFetchProvider(id)).then(() => {
      // Return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches clearProviderProfile on fetch failure', () => {
    const id = 'someId';

    // Mock the fetchProvider function to return a rejected promise
    fetchProvider.mockRejectedValue('Fetch error');

    const expectedActions = [{ type: ACTION_TYPES.CLEAR_PROVIDER_PROFILE }];

    const store = mockStore({});

    return store.dispatch(toFetchProvider(id)).then(() => {
      // Return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

//////// Selector ////////
describe('providerProfile selectors', () => {
  it('getProviderProfile should return providerProfileReducer from state', () => {
    const mockState = {
      providerProfileReducer: {
        Id: 'someId',
        Name: 'John Doe',
        Title: 'Doctor',
        Description: 'Medical professional',
        Languages: ['English', 'Spanish'],
        Degrees: ['MD'],
        PictureURL: 'someURL',
      },
    };

    const result = getProviderProfile(mockState);
    expect(result).toEqual({
      Id: 'someId',
      Name: 'John Doe',
      Title: 'Doctor',
      Description: 'Medical professional',
      Languages: ['English', 'Spanish'],
      Degrees: ['MD'],
      PictureURL: 'someURL',
    });
  });

  it('getProviderProfile should handle undefined providerProfileReducer', () => {
    const mockState = {
      // No providerProfileReducer in the state
    };

    const result = getProviderProfile(mockState);
    expect(result).toBeUndefined();
  });
});
