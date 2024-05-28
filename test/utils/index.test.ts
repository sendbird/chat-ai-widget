import { describe, it, expect, vi } from 'vitest';

import { formatCreatedAtToAMPM } from '../../src/utils';

describe('formatCreatedAtToAMPM', () => {
  it('should format the time to AM/PM in local timezone (mocked to Germany time)', () => {
    // Mock the Date object to return a specific date and time in UTC
    const mockDate = new Date('2023-05-28T12:34:00Z'); // This is 14:34 in Germany during CEST (UTC+2)

    // Mock Date.now to return the timestamp of mockDate
    vi.useFakeTimers().setSystemTime(mockDate);

    // The expected local time string in Germany should be "2:34 PM"
    const result = formatCreatedAtToAMPM(mockDate.getTime());
    expect(result).toBe('2:34 PM');

    // Restore the timers
    vi.useRealTimers();
  });
});
