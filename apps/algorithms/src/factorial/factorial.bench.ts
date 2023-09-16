import { bench, describe } from 'vitest';

import { LARGE_NUMBER } from '../util';
import { factorial, factorialIterative } from './factorial';

describe('factorial', () => {
  bench('recursive', () => {
    factorial(LARGE_NUMBER);
  });

  bench('iterative', () => {
    factorialIterative(LARGE_NUMBER);
  });
});
