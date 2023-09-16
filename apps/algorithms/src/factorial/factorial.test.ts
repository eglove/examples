import { assert, describe, it } from 'vitest';

import { factorial, factorialIterative } from './factorial';

const testCases = [
  [0, 1],
  [5, 120],
  [10, 3_628_800],
];

describe('factorial', () => {
  it.each(testCases)('should work', (number, result) => {
    assert.equal(factorial(number), result);
  });

  it.each(testCases)('should work', (number, result) => {
    assert.equal(factorialIterative(number), result);
  });
});
