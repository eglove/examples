import { assert, describe, it } from 'vitest';

import { formatPhoneNumber } from './format-phone-number';

const testCases: [number[], string][] = [
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], '(123) 456-7890'],
  [[5, 1, 9, 5, 5, 5, 4, 4, 6, 8], '(519) 555-4468'],
  [[3, 4, 5, 5, 0, 1, 2, 5, 2, 7], '(345) 501-2527'],
];

describe('format phone number', () => {
  it.each(testCases)('should work', (numbers, result) => {
    assert.equal(formatPhoneNumber(numbers), result);
  });
});
