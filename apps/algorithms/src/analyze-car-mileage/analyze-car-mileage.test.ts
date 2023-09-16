import { assert, describe, it } from 'vitest';

import type { Analysis, Car } from './analyze-car-mileage';
import { analyzeCarMileage } from './analyze-car-mileage';

const testCases: Array<[Car[], Analysis]> = [
  [
    [
      { make: 'Toyota', mileage: 25_000, model: 'Corolla', year: 2020 },
      { make: 'Honda', mileage: 30_000, model: 'Civic', year: 2019 },
      { make: 'Ford', mileage: 15_000, model: 'Mustang', year: 2021 },
    ],
    {
      averageMileage: 23_333.33,
      highestMileageCar: {
        make: 'Honda',
        mileage: 30_000,
        model: 'Civic',
        year: 2019,
      },
      lowestMileageCar: {
        make: 'Ford',
        mileage: 15_000,
        model: 'Mustang',
        year: 2021,
      },
      totalMileage: 70_000,
    },
  ],
];

describe('analyze car mileage', () => {
  it.each(testCases)('should work', (cars, analysis) => {
    assert.deepStrictEqual(analyzeCarMileage(cars), analysis);
  });
});
