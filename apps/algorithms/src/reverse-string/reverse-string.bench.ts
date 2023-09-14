import { bench, describe } from 'vitest';

import { randomString } from '../util';
import { reverseString, reverseStringBuiltIn } from './reverse-string';

describe('reverse string', () => {
  bench('string builder', () => {
    reverseString(randomString());
  });

  bench('built in', () => {
    reverseStringBuiltIn(randomString());
  });
});