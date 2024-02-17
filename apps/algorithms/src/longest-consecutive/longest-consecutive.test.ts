import { assert, describe, it } from 'vitest';

import { longestConsecutive } from './longest-consecutive';

const testCases: [number[], number][] = [
  [[100, 4, 200, 1, 3, 2], 4],
  [[0, 3, 7, 2, 5, 8, 4, 6, 9, 1], 10],
];

describe('longest consecutive', () => {
  it.each(testCases)('should work', (numbers, result) => {
    assert.equal(longestConsecutive(numbers), result);
  });
});
