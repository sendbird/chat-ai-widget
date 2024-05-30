import { describe, it, expect } from 'vitest';

import { formatCreatedAtToAMPM } from '../../src/utils/messageTimestamp';

describe('formatCreatedAtToAMPM', () => {
  it('Verify formatCreatedAtToAMPM with mocked date.', () => {
    const mockDate = new Date(Date.UTC(2012, 11, 20, 1, 56, 31));
    /**
     * Note the below expected time depends on the region in which the test is running.
     * South Korea is 9 hours ahead of Coordinated Universal Time.
     */
    const expectedTime = '10:56 AM';
    const result = formatCreatedAtToAMPM(mockDate.getTime());
    expect(result).toBe(expectedTime);
  });
});
