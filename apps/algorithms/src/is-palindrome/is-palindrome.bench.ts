import { bench, describe } from 'vitest';

import { randomString } from '../util';
import { isPalindrome, isPalindromePointers } from './is-palindrome';

describe('isPalindrome', () => {
  bench('reverse first', () => {
    isPalindrome(randomString());
  });

  bench('pointers', () => {
    isPalindromePointers(randomString());
  });
});
