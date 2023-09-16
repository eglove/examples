import { assert, describe, it } from 'vitest';

import {
  powerBuiltIn,
  powerHalf,
  powerIterative,
  powerRecursive,
} from './power';

const testCases = [
  [2, 3, 8],
  [5, 2, 25],
  [3, 4, 81],
];

describe('power', () => {
  it.each(testCases)('should work', (base, exponent, result) => {
    assert.equal(powerRecursive(base, exponent), result);
  });

  it.each(testCases)('should work', (base, exponent, result) => {
    assert.equal(powerHalf(base, exponent), result);
  });

  it.each(testCases)('should work', (base, exponent, result) => {
    assert.equal(powerBuiltIn(base, exponent), result);
  });

  it.each(testCases)('should work', (base, exponent, result) => {
    assert.equal(powerIterative(base, exponent), result);
  });
});
