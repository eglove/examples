import { faker } from '@faker-js/faker';
import { bench, describe } from 'vitest';

import { isValidIpv4, isValidIpv4Regex } from './is-valid-ipv4';

describe('isValidIPV4', () => {
  bench('js logic', () => {
    isValidIpv4(faker.internet.ipv4());
  });

  bench('regex', () => {
    isValidIpv4Regex(faker.internet.ipv4());
  });
});
