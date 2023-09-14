import { assert, describe, it } from 'vitest';

import { reverseString, reverseStringBuiltIn } from './reverse-string';

const testCases = [
  ['hello', 'olleh'],
  ['world', 'dlrow'],
  ['', ''],
];

describe('reverse string', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(reverseString(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(reverseStringBuiltIn(string), result);
  });
});
