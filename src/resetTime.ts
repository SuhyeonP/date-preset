export function resetOnlyTime(date: string): Date {
  const result = new Date(date);
  result.setHours(0);
  result.setMinutes(0);
  result.setSeconds(0);

  return result;
}
