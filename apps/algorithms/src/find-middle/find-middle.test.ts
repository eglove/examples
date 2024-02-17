import { assert, describe, it } from 'vitest';

import { LinkedList } from '../linked-list';
import { findMiddle, findMiddleFastSlowPointer } from './find-middle';

const testCases: [number[], number][] = [
  [[1, 2, 3, 4, 5], 3],
  [[1, 2, 3, 4, 4, 6], 4],
];

describe('find middle', () => {
  it.each(testCases)('should work', (numbers, result) => {
    const list = new LinkedList<number>();

    for (const number of numbers) {
      list.add(number);
    }

    assert.equal(findMiddle(list), result);
  });

  it.each(testCases)('should work', (numbers, result) => {
    const list = new LinkedList<number>();

    for (const number of numbers) {
      list.add(number);
    }

    assert.equal(findMiddleFastSlowPointer(list), result);
  });
});
