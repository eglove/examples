import { bench, describe } from 'vitest';

import { randomString } from '../util';
import { isBalanced, isBalancedArray } from './balanced-parentheses';

describe('balanced parentheses', () => {
  bench('stack', () => {
    isBalanced(randomString());
  });

  bench('array', () => {
    isBalancedArray(randomString());
  });
});
