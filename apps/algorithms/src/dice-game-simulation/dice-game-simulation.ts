type Result = 'lose' | 'roll again' | 'win';

type Simulation = {
  dice1: number;
  dice2: number;
  result: Result;
  sum: number;
};

function rolleDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function diceGameSimulation(numberOfSimulations: number): Simulation[] {
  let results: Simulation[] = [];

  for (let index = 0; index < numberOfSimulations; index++) {
    const dice1 = rolleDice();
    const dice2 = rolleDice();
    const sum = dice1 + dice2;
    let result: Result = 'roll again';

    if (sum === 7 || sum === 11) {
      result = 'win';
    }

    if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    }

    results = [
      ...results,
      {
        dice1,
        dice2,
        result,
        sum,
      },
    ];
  }

  return results;
}

export function diceGameSimulationSwitch(
  numberOfSimulations: number,
): Simulation[] {
  let results: Simulation[] = [];

  for (let index = 0; index < numberOfSimulations; index++) {
    const dice1 = rolleDice();
    const dice2 = rolleDice();
    const sum = dice1 + dice2;
    let result: Result = 'roll again';

    switch (sum) {
      case 7:
      case 11: {
        result = 'win';
        break;
      }

      case 2:
      case 3:
      case 12: {
        result = 'lose';
        break;
      }

      default: {
        break;
      }
    }

    results = [
      ...results,
      {
        dice1,
        dice2,
        result,
        sum,
      },
    ];
  }

  return results;
}
