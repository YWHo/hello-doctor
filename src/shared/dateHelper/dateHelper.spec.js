import dayjs from 'dayjs';
import * as dateHelper from './dateHelper';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

describe('dateHelper', () => {
  it('getDatesInThreeMonthsFrom to work as expected', () => {
    const list = dateHelper.getDatesInThreeMonthsFrom(dayjs('2019-06-18'));
    expect(list.length).toBe(75);
    expect(list[0]).toBe('2019-06-18');
    expect(list[list.length - 1]).toBe('2019-08-31');
  });

  it('isMorningTime returns false for 07:59', () => {
    const time = dayjs('07:59', 'HH:mm');
    expect(dateHelper.isMorningTime(time)).toBeFalsy();
  });

  it('isMorningTime returns true for 08:00', () => {
    const time = dayjs('08:00', 'HH:mm');
    expect(dateHelper.isMorningTime(time)).toBeTruthy();
  });

  it('isMorningTime returns true for 10:00', () => {
    const time = dayjs('10:00', 'HH:mm');
    expect(dateHelper.isMorningTime(time)).toBeTruthy();
  });

  it('isMorningTime returns false for 12:00', () => {
    const time = dayjs('12:00', 'HH:mm');
    expect(dateHelper.isMorningTime(time)).toBeFalsy();
  });

  it('isAfternoonTime returns true for 12:00', () => {
    const time = dayjs('12:00', 'HH:mm');
    expect(dateHelper.isAfternoonTime(time)).toBeTruthy();
  });

  it('isAfternoonTime returns true for 15:00', () => {
    const time = dayjs('15:00', 'HH:mm');
    expect(dateHelper.isAfternoonTime(time)).toBeTruthy();
  });

  it('isAfternoonTime returns false for 17:00', () => {
    const time = dayjs('17:00', 'HH:mm');
    expect(dateHelper.isAfternoonTime(time)).toBeFalsy();
  });

  it('isEveningTime returns true for 17:00', () => {
    const time = dayjs('17:00', 'HH:mm');
    expect(dateHelper.isEveningTime(time)).toBeTruthy();
  });

  it('isEveningTime returns true for 19:00', () => {
    const time = dayjs('19:00', 'HH:mm');
    expect(dateHelper.isEveningTime(time)).toBeTruthy();
  });

  it('isEveningTime returns false for 20:01', () => {
    const time = dayjs('20:01', 'HH:mm');
    expect(dateHelper.isEveningTime(time)).toBeFalsy();
  });
});
