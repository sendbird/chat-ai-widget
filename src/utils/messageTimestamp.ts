import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

/**
 * createdAt is in UTC. Convert to local time using toLocaleString.
 */
export function formatCreatedAtToAMPM(
  createdAt: number,
  locale: Locale = enUS
) {
  const time = format(createdAt || 0, 'p', { locale });
  return time;
}
