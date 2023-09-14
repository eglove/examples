import { bench, describe } from 'vitest';

import { randomString } from '../util';
import {
  generateHashtag,
  generateHashtagRegexReplace,
} from './generate-hashtag';

describe('generate hashtag', () => {
  bench('string methods', () => {
    generateHashtag(randomString());
  });

  bench('regex', () => {
    generateHashtagRegexReplace(randomString());
  });
});
