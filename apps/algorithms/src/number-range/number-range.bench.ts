import { bench, describe } from 'vitest';

import { LARGE_NUMBER } from '../util';
import { numberRange, numberRangeRecursive } from './number-range';

describe('number range', () => {
  bench('iterative', () => {
    numberRange(1, LARGE_NUMBER);
  });

  bench('recursive', () => {
    numberRangeRecursive(1, LARGE_NUMBER);
  });
});
