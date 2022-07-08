import { StringOrDate } from './types';

export function resetOnlyTime(date: StringOrDate): Date {
  const result = new Date(date);
  result.setHours(0);
  result.setMinutes(0);
  result.setSeconds(0);

  return result;
}
