import { bench, describe } from 'vitest';

import { randomNumberArray } from '../util';
import { findMaxNumber, findMaxNumberMath } from './find-max-number';

describe('find max number', () => {
  bench('loop', () => {
    findMaxNumber(randomNumberArray());
  });

  bench('math.max', () => {
    findMaxNumberMath(randomNumberArray());
  });
});
