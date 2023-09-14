import { bench, describe } from 'vitest';

import { randomCharacterArray } from '../util';
import {
  missingLetter,
  missingLetterCharCode,
  missingLetterSet,
} from './missing-letter';

describe('missing letter', () => {
  bench('string includes', () => {
    missingLetter(randomCharacterArray());
  });

  bench('set', () => {
    missingLetterSet(randomCharacterArray());
  });

  bench('char code', () => {
    missingLetterCharCode(randomCharacterArray());
  });
});
