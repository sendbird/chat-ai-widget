import { format, Locale } from 'date-fns';
import { enUS } from 'date-fns/locale';

/**
 * createdAt is in UTC. Convert to local time using toLocaleString.
 * Note that returned time is computed based on the running app's region but not the injected locale value.
 * So result varies depending on the location of the running app.
 */
export function formatCreatedAtToAMPM(createdAt: number, locale: Locale = enUS) {
  const time = format(createdAt || 0, 'p', { locale });
  return time;
}
