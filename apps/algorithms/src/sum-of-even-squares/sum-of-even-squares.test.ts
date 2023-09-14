import { assert, describe, it } from 'vitest';

import { sumOfEvenSquares } from './sum-of-even-squares';

const testCases: Array<[number[], number]> = [
  [[1, 2, 3, 4, 5], 20],
  [[-1, 0, 1, 2, 3, 4], 20],
  [[], 0],
];

describe('sum of even squares', () => {
  it.each(testCases)('should work', (numbers, result) => {
    assert.equal(sumOfEvenSquares(numbers), result);
  });
});
