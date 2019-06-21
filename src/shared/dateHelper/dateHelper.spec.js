import dayjs from 'dayjs';
import * as dateHelper from './dateHelper';
import { DAY_MORNING, DAY_AFTERNOON, DAY_EVENING } from '../constants';
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

  const morningTime = {
    'd6cbca46-e010-457d-8a7e-c6b3a28d729b': '2019-06-16T08:00:00',
    '3ea1c27a-b0e5-4e25-af5e-8e0f9ad159a2': '2019-06-16T10:00:00'
  };
  const morningSessionOnly = {
    AvailableSlots: {
      ...morningTime
    }
  };

  const afternoonTime = {
    'c8f3f7fb-315d-4f13-a043-cba94c7c643b': '2019-06-16T12:00:00',
    'b433b622-73ff-4062-aee4-4c6310e83a34': '2019-06-16T15:00:00'
  };
  const afternoonSessionOnly = {
    AvailableSlots: {
      ...afternoonTime
    }
  };

  const eveningTime = {
    'c6c5a1af-892c-4ece-b669-a13657b829a2': '2019-06-16T17:00:00',
    '3a9319a6-2099-48fd-8e07-a33e883f4d7b': '2019-06-16T20:00:00',
    '6b721dd9-1ec6-4961-adeb-507bfd91426f': '2019-06-16T19:00:00'
  };
  const eveningSessionOnly = {
    AvailableSlots: {
      ...eveningTime
    }
  };
  const allThreeSessions = {
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
      const list = [afternoonSessionOnly, eveningSessionOnly];
      expect(dateHelper.hasMorningTimeInSchedules(list)).toBeFalsy();
    });

    it('return true when has morning time', () => {
      const list = [afternoonSessionOnly, allThreeSessions];
      expect(dateHelper.hasMorningTimeInSchedules(list)).toBeTruthy();
    });
  });

  describe('hasAfternoonTimeInSchedules', () => {
    it('return false for empty array', () => {
      const list = [];
      expect(dateHelper.hasAfternoonTimeInSchedules(list)).toBeFalsy();
    });

    it('return false for no afternoon time', () => {
      const list = [morningSessionOnly, eveningSessionOnly];
      expect(dateHelper.hasAfternoonTimeInSchedules(list)).toBeFalsy();
    });

    it('return true when has afternoon time', () => {
      const list = [eveningSessionOnly, allThreeSessions];
      expect(dateHelper.hasAfternoonTimeInSchedules(list)).toBeTruthy();
    });
  });

  describe('hasEveningTimeInSchedules', () => {
    it('return false for empty array', () => {
      const list = [];
      expect(dateHelper.hasEveningTimeInSchedules(list)).toBeFalsy();
    });

    it('return false for no evening time', () => {
      const list = [morningSessionOnly, afternoonSessionOnly];
      expect(dateHelper.hasEveningTimeInSchedules(list)).toBeFalsy();
    });

    it('return true when has evening time', () => {
      const list = [eveningSessionOnly];
      expect(dateHelper.hasEveningTimeInSchedules(list)).toBeTruthy();
    });
  });

  describe('filterTimeSlotByPartOfDay', () => {
    const timeSlots = {
      ...morningTime,
      ...afternoonTime,
      ...eveningTime
    };

    it('return as it is when not specifying time', () => {
      const actualObj = dateHelper.filterTimeSlotByPartOfDay(timeSlots);
      expect(actualObj).toMatchObject(timeSlots);
      expect(timeSlots).toMatchObject(actualObj); // reverse compare to ensure no extra key-value pairs
    });

    it('return as it is when specified to start from morning time', () => {
      const actualObj = dateHelper.filterTimeSlotByPartOfDay(
        timeSlots,
        DAY_MORNING
      );
      expect(actualObj).toMatchObject(timeSlots);
      expect(timeSlots).toMatchObject(actualObj);
    });

    it('return without morning time when specified to start from afternoon time', () => {
      const expected = {
        ...afternoonTime,
        ...eveningTime
      };
      const actualObj = dateHelper.filterTimeSlotByPartOfDay(
        timeSlots,
        DAY_AFTERNOON
      );
      expect(actualObj).toMatchObject(expected);
      expect(expected).toMatchObject(actualObj);
    });

    it('return only evening time when specified to start from evening time', () => {
      const expected = {
        ...eveningTime
      };
      const actualObj = dateHelper.filterTimeSlotByPartOfDay(
        timeSlots,
        DAY_EVENING
      );
      expect(actualObj).toMatchObject(expected);
      expect(expected).toMatchObject(actualObj);
    });
  });
});
