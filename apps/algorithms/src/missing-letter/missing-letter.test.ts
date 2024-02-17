import { assert, describe, it } from 'vitest';

import {
  missingLetter,
  missingLetterCharCode,
  missingLetterSet,
} from './missing-letter';

const testCases: [string[], string][] = [
  [['a', 'b', 'c', 'e'], 'd'],
  [['X', 'Z'], 'Y'],
  [['m', 'n', 'o', 'q', 'r'], 'p'],
  [['F', 'G', 'H', 'J'], 'I'],
];

describe('missing letter', () => {
  it.each(testCases)('should work', (characters, result) => {
    assert.equal(missingLetter(characters), result);
  });

  it.each(testCases)('should work', (characters, result) => {
    assert.equal(missingLetterSet(characters), result);
  });

  it.each(testCases)('should work', (characters, result) => {
    assert.equal(missingLetterCharCode(characters), result);
  });
});
