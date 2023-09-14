import { assert, describe, it } from 'vitest';

import { removeDuplicates } from './remove-duplicates';

const testCases = [
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ],
  [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1]],
  [
    [1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true],
    [1, 2, 3, 4, 5, true, 'hello'],
  ],
];

describe('remove duplicates', () => {
  it.each(testCases)('should work', (array, result) => {
    assert.deepStrictEqual(removeDuplicates(array), result);
  });
});
