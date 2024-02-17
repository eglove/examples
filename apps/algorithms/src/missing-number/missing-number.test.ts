import { assert, describe, it } from 'vitest';

import { missingNumber } from './missing-number';

const testCases: [number[], number][] = [
  [[1, 2, 3, 4, 6, 7, 8, 9, 10], 5],
  [[10, 8, 6, 7, 5, 4, 2, 3, 1], 9],
  [[10, 5, 1, 2, 4, 6, 8, 3, 9], 7],
];

describe('missing number', () => {
  it.each(testCases)('should work', (numbers, result) => {
    assert.equal(missingNumber(numbers), result);
  });
});
