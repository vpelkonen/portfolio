import TIMES from '../constants/times'

export const getTimeOfDay = () => {
  const hour = new Date().getHours()
  return 'evening'
  if (hour <= 5) {
    return TIMES.night
  }
  if (hour >= 6 && hour < 12) {
    return TIMES.morning
  }
  if (hour >= 12 && hour < 19) {
    return TIMES.afternoon
  }
  return TIMES.evening
}
