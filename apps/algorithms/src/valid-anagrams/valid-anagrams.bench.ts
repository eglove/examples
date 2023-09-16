import { bench, describe } from 'vitest';

import { randomString } from '../util';
import { validAnagrams, validAnagramsSort } from './valid-anagrams';

describe('valid anagrams', () => {
  bench('logic', () => {
    validAnagrams(randomString(), randomString());
  });

  bench('string sort', () => {
    validAnagramsSort(randomString(), randomString());
  });
});
