import { bench, describe } from 'vitest';

import { randomString } from '../util';
import { titleCase, titleCaseMapJoin, titleCaseWithJoin } from './title-case';

describe('title case', () => {
  bench('string builder', () => {
    titleCase(randomString());
  });

  bench('split and join', () => {
    titleCaseWithJoin(randomString());
  });

  bench('split, map, and join', () => {
    titleCaseMapJoin(randomString());
  });
});
