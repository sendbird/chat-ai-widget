import { Locale } from 'date-fns';

/**
 * createdAt is in UTC. Convert to local time using toLocaleString.
 * Note that returned time is computed based on the running app's region but not the injected locale value.
 * So result varies depending on the location of the running app.
 */
export declare function formatCreatedAtToAMPM(createdAt: number, locale?: Locale): string;
