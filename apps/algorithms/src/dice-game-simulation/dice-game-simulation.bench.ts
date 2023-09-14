import { bench, describe } from 'vitest';

import { LARGE_NUMBER } from '../util';
import {
  diceGameSimulation,
  diceGameSimulationSwitch,
} from './dice-game-simulation';

describe('dice game simulation', () => {
  bench('push to array', () => {
    diceGameSimulation(LARGE_NUMBER);
  });

  bench('push to array', () => {
    diceGameSimulationSwitch(LARGE_NUMBER);
  });
});
