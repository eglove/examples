import { bench, describe } from 'vitest';

import { randomString } from '../util';
import { validatePassword, validatePasswordRegex } from './validate-password';

describe('validate password', () => {
  bench('js logic', () => {
    validatePassword(randomString());
  });

  bench('regex', () => {
    validatePasswordRegex(randomString());
  });
});
