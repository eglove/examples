import { assert, describe, it } from 'vitest';

import type { Product } from './calculate-total-sales';
import { calculateTotalSales } from './calculate-total-sales';

const testCases: Array<[Product[], number, number]> = [
  [
    [
      { name: 'Apple', price: 0.5, quantity: 10 },
      { name: 'Banana', price: 0.3, quantity: 20 },
      { name: 'Orange', price: 0.6, quantity: 15 },
    ],
    8,
    21.6,
  ],
  [
    [
      { name: 'Chocolate', price: 2.5, quantity: 5 },
      { name: 'Chips', price: 1.2, quantity: 10 },
      { name: 'Soda', price: 1, quantity: 8 },
      { name: 'Candy', price: 0.5, quantity: 15 },
    ],
    5,
    42,
  ],
];

describe('calculate total sales', () => {
  it.each(testCases)('should work', (products, taxRate, result) => {
    assert.equal(calculateTotalSales(products, taxRate), result);
  });
});
