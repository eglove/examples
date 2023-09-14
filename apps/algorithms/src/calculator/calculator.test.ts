import { assert, describe, it } from 'vitest';

import { calculator } from './calculator';

describe('calculator', () => {
  it.each([
    [1, 2, '+', 3],
    [10, 5, '-', 5],
    [2, 2, '*', 4],
    [10, 5, '/', 2],
  ])('should work', (number1, number2, operator, result) => {
    // @ts-expect-error allow string
    assert.equal(calculator(number1, number2, operator), result);
  });
});
