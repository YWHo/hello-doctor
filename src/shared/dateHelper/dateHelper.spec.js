import moment from 'moment';
import * as dateHelper from './dateHelper';

describe('dateHelper', () => {
  it('getDatesInThreeMonthsFrom to work as expected', () => {
    const list = dateHelper.getDatesInThreeMonthsFrom(
      moment('2019-06-18', 'YYYY-MM-DD')
    );
    expect(list.length).toBe(75);
    expect(list[0]).toBe('2019-06-18');
    expect(list[list.length - 1]).toBe('2019-08-31');
  });
});
