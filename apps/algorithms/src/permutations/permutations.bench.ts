import { bench, describe } from 'vitest';

import { randomString } from '../util';
import { permutationsOptimized, permutationsRecursive } from './permutations';

describe('permutations', () => {
  bench('recursive', () => {
    permutationsRecursive(randomString(5));
  });

  bench('optimized', () => {
    permutationsOptimized(randomString(5));
  });
});
