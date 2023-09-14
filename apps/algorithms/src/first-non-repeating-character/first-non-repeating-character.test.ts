import { assert, describe, it } from 'vitest';

import {
  firstNonRepeatingCharacter,
  firstNonRepeatingCharacterMap,
} from './first-non-repeating-character';

const testCases: Array<[string, string | null]> = [
  ['aabccdeff', 'b'],
  ['aabbcc', null],
  ['abcdef', 'a'],
];

describe('first non-repeating character', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(firstNonRepeatingCharacter(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(firstNonRepeatingCharacterMap(string), result);
  });
});
