import { bench, describe } from 'vitest';

import { powerBuiltIn, powerIterative, powerRecursive } from './power';

describe('power', () => {
  bench('recursive', () => {
    powerRecursive(100, 100);
  });

  bench('built in', () => {
    powerBuiltIn(100, 100);
  });

  bench('iterative', () => {
    powerIterative(100, 100);
  });
});
