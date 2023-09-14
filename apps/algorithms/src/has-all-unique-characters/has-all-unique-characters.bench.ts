import { bench, describe } from 'vitest';

import { randomString } from '../util';
import {
  hasAllUniqueCharacters,
  hasAllUniqueCharactersObject,
  hasAllUniqueCharactersSizeCompare,
} from './has-all-unique-characters';

describe('has all unique characters', () => {
  bench('set', () => {
    hasAllUniqueCharacters(randomString());
  });

  bench('size compare', () => {
    hasAllUniqueCharactersSizeCompare(randomString());
  });

  bench('object', () => {
    hasAllUniqueCharactersObject(randomString());
  });
});
