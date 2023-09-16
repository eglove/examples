import { bench, describe } from 'vitest';

import { fibonacci, fibonacciDynamic } from './fibonacci';

describe('fibonacci', () => {
  bench('recursive', () => {
    fibonacci(10);
  });

  bench('dynamic', () => {
    fibonacciDynamic(10);
  });
});
