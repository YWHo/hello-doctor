import axios from 'axios';
import * as actions from './actions';
import * as constants from '../../shared/constants';
import * as mockData from '../../mocks/mockData';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to save schedules', () => {
    const schedules = mockData.scheduleDict['2019-06-16'];
    const expectedAction = {
      type: constants.SAVE_SCHEDULES,
      payload: { schedules },
    };
    expect(actions.saveSchedules(schedules)).toEqual(expectedAction);
  });

  it('should create an action to clear schedules', () => {
    const schedules = [];
    const expectedAction = {
      type: constants.CLEAR_SCHEDULES,
      payload: {},
    };
    actions.saveSchedules(schedules);
    expect(actions.clearSchedules()).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  let mockGet;
  beforeEach(() => {
    mockGet = jest.spyOn(axios, 'get');
  });

  afterEach(() => {
    mockGet.mockRestore();
  });

  it('should create an async action to fetch and then save schedules', () => {
    const schedules = [
      { name: 'Bob', name: 'Bob' },
      { name: 'Doe', time: 'Morning' },
    ];
    const expectedAction = {
      type: constants.SAVE_SCHEDULES,
      payload: { schedules },
    };

    mockGet.mockImplementation((fullUrl) => {
      return Promise.resolve({
        data: JSON.stringify(schedules),
      });
    });

    const store = mockStore({ schedules: [] });
    return store.dispatch(actions.toFetchSchedules('2019-01-01')).then(() => {
      expect(store.getActions()).toContainEqual(expectedAction);
    });
  });
});
