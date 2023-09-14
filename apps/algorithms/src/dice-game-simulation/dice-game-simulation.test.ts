import { assert, describe, it } from 'vitest';

import { diceGameSimulation } from './dice-game-simulation';

describe('dice game simulation', () => {
  it('should work', () => {
    const results = diceGameSimulation(5);

    for (const item of results) {
      const { sum, result } = item;

      if (sum === 7 || sum === 11) {
        assert.equal(result, 'win');
      } else if (sum === 2 || sum === 3 || sum === 12) {
        assert.equal(result, 'lose');
      } else {
        assert.equal(result, 'roll again');
      }
    }
  });
});
