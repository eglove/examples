import { assert, describe, it } from 'vitest';

import { highestScoringWord } from './highest-scoring-word';

const testCases: [string, string][] = [
  ['man i need a taxi up to ubud', 'taxi'],
  ['what time are we climbing up the volcano', 'volcano'],
  ['take me to semynak', 'semynak'],
  ['the big brown fox jumps over the lazy brown dog', 'jumps'],
];

describe('highest scoring word', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(highestScoringWord(string), result);
  });
});
