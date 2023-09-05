import { describe, expect, it } from 'vitest';

import { romanToInt } from './index';

describe('longestPalindrome', () => {
  it.each([
    ['III', 3],
    ['LVIII', 58],
    ['MCMXCIV', 1994],
  ])('should return the correct result', (string, result) => {
    expect(romanToInt(string)).toBe(result);
  });
});
