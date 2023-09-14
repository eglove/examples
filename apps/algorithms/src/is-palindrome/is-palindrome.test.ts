import { assert, describe, it } from 'vitest';

import { isPalindrome, isPalindromePointers } from './is-palindrome';

const testCases: Array<[string, boolean]> = [
  ['madam', true],
  ['racecar', true],
  ['hello', false],
  ['', true],
];

describe('isPalindrome', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(isPalindrome(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(isPalindromePointers(string), result);
  });
});
