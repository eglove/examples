import { assert, describe, it } from 'vitest';

import { flattenArray, flattenArrayBuiltIn } from './flatten-array';

export type NestedArray<T> = T | Array<T> | Array<NestedArray<T>>;

const testCases: Array<[NestedArray<number>, number[]]> = [
  [
    [1, [2, 3], [4, 5, [6]]],
    [1, 2, 3, 4, 5, 6],
  ],
  [
    [
      [1, 2],
      [3, [4, 5]],
      [6, [7]],
    ],
    [1, 2, 3, 4, 5, 6, 7],
  ],
  [
    [1, [2, [3, [4, [5]]]]],
    [1, 2, 3, 4, 5],
  ],
];

describe('flatten array', () => {
  it.each(testCases)('should work', (array, result) => {
    assert.deepStrictEqual(flattenArray(array), result);
  });

  it.each(testCases)('should work', (array, result) => {
    assert.deepStrictEqual(flattenArrayBuiltIn(array), result);
  });
});
