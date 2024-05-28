/**
 * createdAt is in UTC. Convert to local time using toLocaleString.
 */
export function formatCreatedAtToAMPM(createdAt: number) {
  const date: Date = new Date(createdAt);

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true, // ensures the time is formatted in 12-hour clock notation with AM/PM.
  };
  const locale = navigator.language;
  const localTimeString: string = date.toLocaleTimeString(locale, options);
  return localTimeString;
}
