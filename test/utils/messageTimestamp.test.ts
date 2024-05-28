import { describe, it, expect } from 'vitest';

import { formatCreatedAtToAMPM } from '../../src/utils/messageTimestamp';

describe('formatCreatedAtToAMPM', () => {
  it('should format the time to AM/PM in local timezone (mocked to Germany time)', () => {
    const mockDate = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    // Germany is 2 hours ahead of Coordinated Universal Time
    const expectedTime = '5:00 PM';

    const originalToLocaleDateString = Date.prototype.toLocaleDateString;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Date.prototype.toLocaleDateString = (
      locale: string,
      options?: Intl.DateTimeFormatOptions
    ) => {
      /**
       * FIXME: Here is not reached but expected.
       */
      // console.log('## locale: ', locale);
      return originalToLocaleDateString('de-DE', options);
    };

    const result = formatCreatedAtToAMPM(mockDate.getTime());
    Date.prototype.toLocaleDateString = originalToLocaleDateString;

    expect(result).toBe(expectedTime);
  });
});
