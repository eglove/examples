import { assert, describe, it } from 'vitest';

import {
  generateHashtag,
  generateHashtagRegexReplace,
} from './generate-hashtag';

const testCases: [string, boolean | string][] = [
  ['JavaScript is awesome', '#JavaScriptIsAwesome'],
  ['hello world', '#HelloWorld'],
  [
    'This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140',
    false,
  ],
  ['', false],
  ['     ', false],
];

describe('generate hashtag', () => {
  it.each(testCases)('should work', (string, result) => {
    assert.equal(generateHashtag(string), result);
  });

  it.each(testCases)('should work', (string, result) => {
    assert.equal(generateHashtagRegexReplace(string), result);
  });
});
