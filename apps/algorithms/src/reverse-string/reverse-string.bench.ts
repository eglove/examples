import { bench, describe } from 'vitest';

import { randomString } from '../util';
import {
  reverseString,
  reverseStringBuiltIn,
  reverseStringLinkedList,
  reverseStringQueue,
  reverseStringRecursive,
  reverseStringStack,
} from './reverse-string';

describe('reverse string', () => {
  bench('string builder', () => {
    reverseString(randomString());
  });

  bench('built in', () => {
    reverseStringBuiltIn(randomString());
  });

  bench('recursive', () => {
    reverseStringRecursive(randomString());
  });

  bench('stack', () => {
    reverseStringStack(randomString());
  });

  bench('queue', () => {
    reverseStringQueue(randomString());
  });

  bench('linked list', () => {
    reverseStringLinkedList(randomString());
  });
});
