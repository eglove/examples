import { bench, describe } from 'vitest';

import { randomNumberArray } from '../util';
import {
  symmetricDifference,
  symmetricDifferenceFilter,
} from './symmetric-difference';

describe('symmetric difference', () => {
  bench('concatenated search', () => {
    symmetricDifference(randomNumberArray(), randomNumberArray());
  });

  bench('filter', () => {
    symmetricDifferenceFilter(randomNumberArray(), randomNumberArray());
  });
});
