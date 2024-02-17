import { assert, describe, it } from 'vitest';

import {
  symmetricDifference,
  symmetricDifferenceFilter,
} from './symmetric-difference';

const testCases: [number[], number[], number[]][] = [
  [
    [1, 2, 3],
    [3, 4, 5],
    [1, 2, 4, 5],
  ],
  [
    [1, 2, 2, 3, 4],
    [2, 3, 3, 4, 5],
    [1, 5],
  ],
  [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], []],
  [
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3, 4, 5, 6],
  ],
];

describe('symmetric difference', () => {
  it.each(testCases)('should work', (array1, array2, result) => {
    assert.deepStrictEqual(symmetricDifference(array1, array2), result);
  });

  it.each(testCases)('should work', (array1, array2, result) => {
    assert.deepStrictEqual(symmetricDifferenceFilter(array1, array2), result);
  });
});
