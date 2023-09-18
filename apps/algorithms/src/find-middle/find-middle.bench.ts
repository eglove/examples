import { bench, describe } from 'vitest';

import { LinkedList } from '../linked-list';
import { randomNumberArray } from '../util';
import { findMiddle, findMiddleFastSlowPointer } from './find-middle';

const numbers = randomNumberArray();

describe('find middle', () => {
  bench('length', () => {
    const list = new LinkedList<number>();

    for (const number of numbers) {
      list.add(number);
    }

    findMiddle(list);
  });

  bench('fast slow pointer', () => {
    const list = new LinkedList<number>();

    for (const number of numbers) {
      list.add(number);
    }

    findMiddleFastSlowPointer(list);
  });
});
