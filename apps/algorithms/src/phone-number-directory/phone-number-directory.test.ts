import { assert, describe, it } from 'vitest';

import { phoneNumberDirectory } from './phone-number-directory';

const testCases: Array<[string[], Map<string, string>]> = [
  [
    ['John:123-456-7890', 'Jane:987-654-3210', 'Joe:555-555-5555'],
    new Map([
      ['John', '123-456-7890'],
      ['Jane', '987-654-3210'],
      ['Joe', '555-555-5555'],
    ]),
  ],
];

describe('phone number directory', () => {
  it.each(testCases)('should work', (array, result) => {
    assert.deepStrictEqual(phoneNumberDirectory(array), result);
  });
});
