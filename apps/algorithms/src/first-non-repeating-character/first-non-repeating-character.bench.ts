import { bench, describe } from 'vitest';

import { randomString } from '../util';
import {
  firstNonRepeatingCharacter,
  firstNonRepeatingCharacterMap,
} from './first-non-repeating-character';

describe('first non-repeating character', () => {
  bench('object', () => {
    firstNonRepeatingCharacter(randomString());
  });

  bench('map', () => {
    firstNonRepeatingCharacterMap(randomString());
  });
});
