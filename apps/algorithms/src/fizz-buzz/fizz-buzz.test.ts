import { assert, describe, it } from 'vitest';

import { fizzBuzz, fizzBuzzLeastCommonDenominator } from './fizz-buzz';

const testCases: Array<[number, Array<string | number>]> = [
  [5, [1, 2, 'Fizz', 4, 'Buzz']],
  [
    15,
    [
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ],
  ],
];

describe('fizzBuzz', () => {
  it.each(testCases)('should work', (number, result) => {
    assert.deepStrictEqual(fizzBuzz(number), result);
  });

  it.each(testCases)('should work', (number, result) => {
    assert.deepStrictEqual(fizzBuzzLeastCommonDenominator(number), result);
  });
});
