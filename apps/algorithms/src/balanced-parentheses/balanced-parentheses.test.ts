import { assert, describe, it } from 'vitest';

import { isBalanced, isBalancedArray } from './balanced-parentheses';

const testCases: Array<[string, boolean]> = [
  ['()', true],
  ['()()', true],
  ['(()())', true],
  ['(()', false],
  [')(', false],
];

describe('balanced parentheses', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(isBalanced(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(isBalancedArray(string), result);
  });
});
