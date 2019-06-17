import * as selectors from './selectors';

describe('selectors', () => {
  const state = {
    schedules: [
      { name: 'Jon', appointment: 'Morning' },
      { name: '', appointment: 'Noon' }
    ]
  };

  it('getSchedules should return the schedules', () => {
    expect(selectors.getSchedules(state)).toEqual(state.schedules);
  });
});
