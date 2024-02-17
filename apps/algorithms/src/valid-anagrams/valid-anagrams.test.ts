import { assert, describe, it } from 'vitest';

import { validAnagrams, validAnagramsSort } from './valid-anagrams';

const testCases: [string, string, boolean][] = [
  ['listen', 'silent', true],
  ['hello', 'world', false],
  ['astronomer', 'moonstarer', true],
];

describe('valid anagrams', () => {
  it.each(testCases)('should work', (string1, string2, result) => {
    assert.equal(validAnagrams(string1, string2), result);
  });

  it.each(testCases)('should work', (string1, string2, result) => {
    assert.equal(validAnagramsSort(string1, string2), result);
  });
});
