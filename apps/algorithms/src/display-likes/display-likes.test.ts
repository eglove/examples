import { assert, describe, it } from 'vitest';

import { displayLikes } from './display-likes';

const testCases: [string[], string][] = [
  [[], 'no one likes this'],
  [['Peter'], 'Peter likes this'],
  [['Max', 'John', 'Mark'], 'Max, John, and Mark like this'],
  [['Alex', 'Jacob', 'Mark', 'Max'], 'Alex, Jacob, and 2 others like this'],
  [
    ['Alex', 'Jacob', 'Mark', 'Max', 'Jill'],
    'Alex, Jacob, and 3 others like this',
  ],
];

describe('display likes', () => {
  it.each(testCases)('should work', (array, result) => {
    assert.equal(displayLikes(array), result);
  });
});
