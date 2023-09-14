import { assert, describe, it } from 'vitest';

import { countOccurrences, countOccurrencesSplit } from './count-occurrences';

describe('count occurrences', () => {
  it.each([
    ['hello', 'l', 2],
    ['hello', 'z', 0],
  ])('should work', (string, character, result) => {
    assert.equal(countOccurrences(string, character), result);
  });

  it.each([
    ['hello', 'l', 2],
    ['hello', 'z', 0],
  ])('should work', (string, character, result) => {
    assert.equal(countOccurrencesSplit(string, character), result);
  });
});
