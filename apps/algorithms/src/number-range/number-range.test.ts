import { assert, describe, it } from 'vitest';

import { numberRange, numberRangeRecursive } from './number-range';

const testCases: Array<[number, number, number[]]> = [
  [1, 5, [1, 2, 3, 4, 5]],
  [3, 10, [3, 4, 5, 6, 7, 8, 9, 10]],
  [7, 7, [7]],
];

describe('number range', () => {
  it.each(testCases)('should work', (startNumber, endNumber, result) => {
    assert.deepStrictEqual(numberRange(startNumber, endNumber), result);
  });

  it.each(testCases)('should work', (startNumber, endNumber, result) => {
    assert.deepStrictEqual(
      numberRangeRecursive(startNumber, endNumber),
      result,
    );
  });
});
