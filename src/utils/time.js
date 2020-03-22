import TIMES from '../constants/times'

export const getTimeOfDay = () => {
  const hour = new Date().getHours()
  if (hour <= 5) {
    return TIMES.night
  }
  if (hour >= 6 && hour < 12) {
    return TIMES.morning
  }
  if (hour >= 12 && hour < 18) {
    return TIMES.afternoon
  }
  return TIMES.evening
}
