import { assert, describe, it } from 'vitest';

import { arrayIntersection, arrayIntersectionSet } from './array-intersection';

const testCases: Array<[number[], number[], number[]]> = [
  [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7],
    [3, 4, 5],
  ],
  [[10, 20, 30], [30, 40, 50], [30]],
  [[1, 2, 3], [4, 5, 6], []],
];

describe('array intersection', () => {
  it.each(testCases)('should work', (array1, array2, result) => {
    assert.deepStrictEqual(arrayIntersection(array1, array2), result);
  });

  it.each(testCases)('should work', (array1, array2, result) => {
    assert.deepStrictEqual(arrayIntersectionSet(array1, array2), result);
  });
});
