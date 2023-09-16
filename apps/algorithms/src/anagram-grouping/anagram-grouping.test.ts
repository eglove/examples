import { assert, describe, it } from 'vitest';

import { anagramGrouping } from './anagram-grouping';

const testCases: Array<[string[], string[][]]> = [
  [
    ['cat', 'act', 'dog', 'god', 'tac'],
    [
      ['cat', 'act', 'tac'],
      ['dog', 'god'],
    ],
  ],
  [
    ['listen', 'silent', 'enlist', 'hello', 'world'],
    [['listen', 'silent', 'enlist'], ['hello'], ['world']],
  ],
];

describe('anagram grouping', () => {
  it.each(testCases)('should work', (words, result) => {
    assert.deepStrictEqual(anagramGrouping(words), result);
  });
});
