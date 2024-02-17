import { assert, describe, it } from 'vitest';

import { isValidIpv4, isValidIpv4Regex } from './is-valid-ipv4';

const testCases: [string, boolean][] = [
  ['1.2.3.4', true],
  ['123.45.67.89', true],
  ['1.2.3', false],
  ['1.2.3.4.5', false],
  ['123.456.78.90', false],
  ['123.045.067.089', false],
];

describe('isValidIPV4', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(isValidIpv4(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(isValidIpv4Regex(string), result);
  });
});
