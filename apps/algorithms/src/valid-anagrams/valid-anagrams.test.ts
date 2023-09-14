import { assert, describe, it } from 'vitest';

import { validAnagrams } from './valid-anagrams';

const testCases: Array<[string, string, boolean]> = [
  ['listen', 'silent', true],
  ['hello', 'world', false],
  ['astronomer', 'moonstarer', true],
];

describe('valid anagrams', () => {
  it.each(testCases)('should work', (string1, string2, result) => {
    assert.equal(validAnagrams(string1, string2), result);
  });
});
