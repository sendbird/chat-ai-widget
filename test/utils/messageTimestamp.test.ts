import { describe, it, expect } from 'vitest';

import { formatCreatedAtToAMPM } from '../../src/utils/messageTimestamp';

describe('formatCreatedAtToAMPM', () => {
  it('should format the time to AM/PM in local timezone (mocked to Germany time)', () => {
    const mockDate = new Date(Date.UTC(2012, 11, 20, 1, 56, 31));
    // Germany is 2 hours ahead of Coordinated Universal Time
    const expectedTime = '10:56 AM';
    const result = formatCreatedAtToAMPM(mockDate.getTime());
    expect(result).toBe(expectedTime);
  });
});
