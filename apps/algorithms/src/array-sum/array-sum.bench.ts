import { bench, describe } from 'vitest';

import { randomNumberArray } from '../util';
import { arraySumIterative, arraySumRecursive } from './array-sum';

describe('array sum', () => {
  bench('recursive', () => {
    arraySumRecursive(randomNumberArray());
  });

  bench('iterative', () => {
    arraySumIterative(randomNumberArray());
  });
});
