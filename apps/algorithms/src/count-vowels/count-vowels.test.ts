import { assert, describe, it } from 'vitest';

import { countVowels } from './count-vowels';

const testCases: Array<[string, number]> = [
  ['hello', 2],
  ['why', 0],
  ['mississippi', 4],
];

describe('count vowels', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(countVowels(string), result);
  });
});
