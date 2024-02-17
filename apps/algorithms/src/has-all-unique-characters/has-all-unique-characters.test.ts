import { assert, describe, it } from 'vitest';

import {
  hasAllUniqueCharacters,
  hasAllUniqueCharactersObject,
  hasAllUniqueCharactersSizeCompare,
} from './has-all-unique-characters';

const testCases: [string, boolean][] = [
  ['abcdefg', true],
  ['abcdefgA', true],
  ['programming', false],
  ['', true],
  ['a', true],
];

describe('has all unique characters', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(hasAllUniqueCharacters(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(hasAllUniqueCharactersSizeCompare(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(hasAllUniqueCharactersObject(string), result);
  });
});
