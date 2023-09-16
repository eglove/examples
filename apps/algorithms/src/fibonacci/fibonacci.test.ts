import { assert, describe, it } from 'vitest';

import { fibonacci, fibonacciDynamic } from './fibonacci';

const testCases = [
  [4, 3],
  [6, 8],
  [10, 55],
];

describe('fibonacci', () => {
  it.each(testCases)('should work', (n, result) => {
    assert.equal(fibonacci(n), result);
  });

  it.each(testCases)('should work', (n, result) => {
    assert.equal(fibonacciDynamic(n), result);
  });
});
