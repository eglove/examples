import { assert, describe, it } from 'vitest';

import {
  reverseString,
  reverseStringBuiltIn,
  reverseStringRecursive,
} from './reverse-string';

const testCases = [
  ['hello', 'olleh'],
  ['world', 'dlrow'],
  ['', ''],
  ['a', 'a'],
  ['racecar', 'racecar'],
];

describe('reverse string', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(reverseString(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(reverseStringBuiltIn(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(reverseStringRecursive(string), result);
  });
});
