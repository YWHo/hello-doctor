import dayjs from 'dayjs';
import * as dateHelper from './dateHelper';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

describe('dateHelper', () => {
  describe('getDatesInThreeMonthsFrom', () => {
    it('work as expected', () => {
      const list = dateHelper.getDatesInThreeMonthsFrom(dayjs('2019-06-18'));
      expect(list.length).toBe(75);
      expect(list[0]).toBe('2019-06-18');
      expect(list[list.length - 1]).toBe('2019-08-31');
    });
  });

  describe('isMorningTime', () => {
    it('returns false for 07:59', () => {
      const time = dayjs('07:59', 'HH:mm');
      expect(dateHelper.isMorningTime(time)).toBeFalsy();
    });

    it('returns true for 08:00', () => {
      const time = dayjs('08:00', 'HH:mm');
      expect(dateHelper.isMorningTime(time)).toBeTruthy();
    });

    it('returns true for 10:00', () => {
      const time = dayjs('10:00', 'HH:mm');
      expect(dateHelper.isMorningTime(time)).toBeTruthy();
    });

    it('returns false for 12:00', () => {
      const time = dayjs('12:00', 'HH:mm');
      expect(dateHelper.isMorningTime(time)).toBeFalsy();
    });
  });

  describe('isAfternoonTime', () => {
    it('returns true for 12:00', () => {
      const time = dayjs('12:00', 'HH:mm');
      expect(dateHelper.isAfternoonTime(time)).toBeTruthy();
    });

    it('returns true for 15:00', () => {
      const time = dayjs('15:00', 'HH:mm');
      expect(dateHelper.isAfternoonTime(time)).toBeTruthy();
    });

    it('returns false for 17:00', () => {
      const time = dayjs('17:00', 'HH:mm');
      expect(dateHelper.isAfternoonTime(time)).toBeFalsy();
    });
  });

  describe('isEveningTime', () => {
    it('returns true for 17:00', () => {
      const time = dayjs('17:00', 'HH:mm');
      expect(dateHelper.isEveningTime(time)).toBeTruthy();
    });

    it('returns true for 19:00', () => {
      const time = dayjs('19:00', 'HH:mm');
      expect(dateHelper.isEveningTime(time)).toBeTruthy();
    });

    it('returns false for 20:01', () => {
      const time = dayjs('20:01', 'HH:mm');
      expect(dateHelper.isEveningTime(time)).toBeFalsy();
    });
  });

  /////////////////////////////

  const morningOnly = {
    AvailableSlots: {
      '357ea510-a2cb-41b6-a67a-d18a02a12260': '2019-06-16T09:15:00',
      '2a306785-3093-4e47-829d-5342c66b5c51': '2019-06-16T09:30:00'
    }
  };

  const afternoonOnly = {
    AvailableSlots: {
      '95dee031-6cb7-4644-b32e-9714c6b3e59d': '2019-06-16T12:45:00',
      '12cbdc25-9fc7-4f4e-85f0-04d9f5e84913': '2019-06-16T13:00:00'
    }
  };
  const eveningOnly = {
    AvailableSlots: {
      '44c145a5-aed1-4eca-81f4-4908a766a54f': '2019-06-16T18:30:00',
      '9cb5b97c-203f-42be-a9e7-b8fda99c63f6': '2019-06-16T18:45:00'
    }
  };
  const allThreeTime = {
    AvailableSlots: {
      'a65fe281-708b-47ad-83aa-644afc76d1fb': '2019-06-16T10:30:00',
      '12cbdc25-9fc7-4f4e-85f0-04d9f5e84913': '2019-06-16T13:00:00',
      '9cb5b97c-203f-42be-a9e7-b8fda99c63f6': '2019-06-16T18:45:00'
    }
  };

  describe('hasMorningTimeInSchedules', () => {
    it('return false for empty array', () => {
      const list = [];
      expect(dateHelper.hasMorningTimeInSchedules(list)).toBeFalsy();
    });

    it('return false for no morning time', () => {
      const list = [afternoonOnly, eveningOnly];
      expect(dateHelper.hasMorningTimeInSchedules(list)).toBeFalsy();
    });

    it('return true when has morning time', () => {
      const list = [afternoonOnly, allThreeTime];
      expect(dateHelper.hasMorningTimeInSchedules(list)).toBeTruthy();
    });
  });

  describe('hasAfternoonTimeInSchedules', () => {
    it('return false for empty array', () => {
      const list = [];
      expect(dateHelper.hasAfternoonTimeInSchedules(list)).toBeFalsy();
    });

    it('return false for no afternoon time', () => {
      const list = [morningOnly, eveningOnly];
      expect(dateHelper.hasAfternoonTimeInSchedules(list)).toBeFalsy();
    });

    it('return true when has afternoon time', () => {
      const list = [eveningOnly, allThreeTime];
      expect(dateHelper.hasAfternoonTimeInSchedules(list)).toBeTruthy();
    });
  });

  describe('hasEveningTimeInSchedules', () => {
    it('return false for empty array', () => {
      const list = [];
      expect(dateHelper.hasEveningTimeInSchedules(list)).toBeFalsy();
    });

    it('return false for no evening time', () => {
      const list = [morningOnly, afternoonOnly];
      expect(dateHelper.hasEveningTimeInSchedules(list)).toBeFalsy();
    });

    it('return true when has evening time', () => {
      const list = [eveningOnly];
      expect(dateHelper.hasEveningTimeInSchedules(list)).toBeTruthy();
    });
  });
});
