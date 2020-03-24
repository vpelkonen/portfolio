import TIMES from '../constants/times'

export const getTimeOfDay = () => {
  const hour = new Date().getHours()
  if (hour >= 22 || hour < 4) {
    return TIMES.night
  }
  if (hour >= 4 && hour < 10) {
    return TIMES.morning
  }
  if (hour >= 10 && hour < 16) {
    return TIMES.afternoon
  }
  // In effect, hour >= 16 || hour < 22
  return TIMES.evening
}
