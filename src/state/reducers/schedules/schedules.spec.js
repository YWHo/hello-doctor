import reducerSchedules from '.'
import * as constants from '../../../shared/constants'

describe('schedules reducer', () => {
  it('should return the initial state', () => {
    expect(reducerSchedules(undefined, {})).toEqual([])
  })

  it('should handle SAVE_SCHEDULES', () => {
    const schedules = [
      {name: 'Winne', title: 'Ms', appointment: 'Monday'},
      {name: 'Typson', title: 'Mr', appointment: 'Sunday'}
    ]
    expect(
      reducerSchedules ([], {
        type: constants.SAVE_SCHEDULES,
        payload: { schedules } 
      })
    ).toEqual(schedules)
  })
})
