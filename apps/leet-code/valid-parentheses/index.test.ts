import { describe, expect, it } from 'vitest';

import { isValidParentheses } from './index';

describe('longestPalindrome', () => {
  it.each([
    ['()', true],
    ['()[]{}', true],
    ['(]', false],
  ])('should return the correct result', (string, result) => {
    expect(isValidParentheses(string)).toBe(result);
  });
});
