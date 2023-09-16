import { bench, describe } from 'vitest';

import { randomNumberArray } from '../util';
import { flattenArray, flattenArrayBuiltIn } from './flatten-array';

describe('flatten array', () => {
  bench('recursive', () => {
    flattenArray(randomNumberArray());
  });

  bench('built in', () => {
    flattenArrayBuiltIn(randomNumberArray());
  });
});
