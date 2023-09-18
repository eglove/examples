import { assert, describe, it } from 'vitest';

import { twoSum } from './two-sum';

const testCases: Array<[number[], number, number[]]> = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
];

describe('two sum', () => {
  it.each(testCases)('should work', (numbers, target, result) => {
    assert.deepStrictEqual(twoSum(numbers, target), result);
  });
});
