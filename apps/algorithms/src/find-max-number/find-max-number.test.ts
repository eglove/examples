import { assert, describe, it } from 'vitest';

import { findMaxNumber, findMaxNumberMath } from './find-max-number';

const testCases: Array<[number[], number]> = [
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10],
  [[10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10],
  [[1, 2, 3, 4, 5, 10, 9, 8, 7, 6], 10],
];

describe('find max number', () => {
  it.each(testCases)('should work', (array, result) => {
    assert.equal(findMaxNumber(array), result);
  });

  it.each(testCases)('should work with math.max', (array, result) => {
    assert.equal(findMaxNumberMath(array), result);
  });
});
