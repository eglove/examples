import { bench, describe } from 'vitest';

import { randomNumberArray } from '../util';
import { arrayIntersection, arrayIntersectionSet } from './array-intersection';

const testCase = [randomNumberArray(), randomNumberArray()];

describe('array intersection', () => {
  bench('includes', () => {
    arrayIntersection(testCase[0], testCase[1]);
  });

  bench('set', () => {
    arrayIntersectionSet(testCase[0], testCase[1]);
  });
});
