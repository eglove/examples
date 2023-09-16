import { assert, describe, it } from 'vitest';

import { wordFrequencyCounter } from './word-frequency-counter';

const testCases: Array<[string, Map<string, number>]> = [
  [
    'The quick brown fox jumps over the lazy dog.',
    new Map([
      ['the', 2],
      ['quick', 1],
      ['brown', 1],
      ['fox', 1],
      ['jumps', 1],
      ['over', 1],
      ['lazy', 1],
      ['dog', 1],
    ]),
  ],
  [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    new Map([
      ['lorem', 1],
      ['ipsum', 1],
      ['dolor', 1],
      ['sit', 1],
      ['amet', 1],
      ['consectetur', 1],
      ['adipiscing', 1],
      ['elit', 1],
    ]),
  ],
];

describe('word frequency counter', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.deepStrictEqual(wordFrequencyCounter(string), result);
  });
});
