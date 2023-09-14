import { assert, describe, it } from 'vitest';

import { titleCase, titleCaseMapJoin, titleCaseWithJoin } from './title-case';

const testCases = [
  ["I'm a little tea pot", "I'm A Little Tea Pot"],
  ['sHoRt AnD sToUT', 'Short And Stout'],
  ['HERE IS MY HANDLE HERE IS MY STOUT', 'Here Is My Handle Here Is My Stout'],
];

describe('title case', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(titleCase(string), result);
  });

  it.each(testCases)('should work with join', (string, result) => {
    assert.equal(titleCaseWithJoin(string), result);
  });

  it.each(testCases)('should work with join', (string, result) => {
    assert.equal(titleCaseMapJoin(string), result);
  });
});
