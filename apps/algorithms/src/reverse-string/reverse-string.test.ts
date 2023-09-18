import { assert, describe, it } from 'vitest';

import {
  reverseString,
  reverseStringBuiltIn,
  reverseStringLinkedList,
  reverseStringQueue,
  reverseStringRecursive,
  reverseStringStack,
} from './reverse-string';

const testCases = [
  ['hello', 'olleh'],
  ['world', 'dlrow'],
  ['', ''],
  ['a', 'a'],
  ['racecar', 'racecar'],
  ['Howdy', 'ydwoH'],
  ['Greetings from Earth', 'htraE morf sgniteerG'],
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

  it.each(testCases)('should work', (string, result) => {
    assert.equal(reverseStringStack(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(reverseStringQueue(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(reverseStringLinkedList(string), result);
  });
});
