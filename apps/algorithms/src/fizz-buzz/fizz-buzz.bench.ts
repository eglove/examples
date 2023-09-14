import { bench, describe } from 'vitest';

import { LARGE_NUMBER } from '../util';
import { fizzBuzz, fizzBuzzLeastCommonDenominator } from './fizz-buzz';

describe('fizzBuzz', () => {
  bench('string builder', () => {
    fizzBuzz(LARGE_NUMBER);
  });

  bench('least common denominator', () => {
    fizzBuzzLeastCommonDenominator(LARGE_NUMBER);
  });
});
