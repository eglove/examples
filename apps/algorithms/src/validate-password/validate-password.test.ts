import { assert, describe, it } from 'vitest';

import { validatePassword, validatePasswordRegex } from './validate-password';

const testCases: Array<[string, boolean]> = [
  ['Abc12345', true],
  ['password123', false],
  ['Pass', false],
  ['HelloWorld', false],
];

describe('validate password', () => {
  it.each(testCases)('should work', (password, result) => {
    assert.equal(validatePassword(password), result);
  });

  it.each(testCases)('should work', (password, result) => {
    assert.equal(validatePasswordRegex(password), result);
  });
});
