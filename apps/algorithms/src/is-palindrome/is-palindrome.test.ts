import { assert, describe, it } from 'vitest';

import {
  isPalindrome,
  isPalindromePointers,
  isPalindromeQueue,
  isPalindromeStack,
} from './is-palindrome';

const testCases: [string, boolean][] = [
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

  it.each(testCases)('should work', (string, result) => {
    assert.equal(isPalindromeStack(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(isPalindromeQueue(string), result);
  });
});
