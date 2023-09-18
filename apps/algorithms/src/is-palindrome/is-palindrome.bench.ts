import { bench, describe } from 'vitest';

import { randomString } from '../util';
import {
  isPalindrome,
  isPalindromePointers,
  isPalindromeQueue,
  isPalindromeStack,
} from './is-palindrome';

describe('isPalindrome', () => {
  bench('reverse first', () => {
    isPalindrome(randomString());
  });

  bench('pointers', () => {
    isPalindromePointers(randomString());
  });

  bench('stack', () => {
    isPalindromeStack(randomString());
  });

  bench('queue', () => {
    isPalindromeQueue(randomString());
  });
});
