import { bench, describe } from 'vitest';

import { randomString } from '../util';
import { countOccurrences, countOccurrencesSplit } from './count-occurrences';

describe('count occurrences', () => {
  bench('loop', () => {
    countOccurrences(randomString(), 'a');
  });

  bench('split', () => {
    countOccurrencesSplit(randomString(), 'a');
  });
});
