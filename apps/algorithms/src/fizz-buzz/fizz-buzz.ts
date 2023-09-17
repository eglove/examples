export function fizzBuzz(number: number): Array<string | number> {
  let result: Array<string | number> = [];

  for (let index = 1; index <= number; index++) {
    let string = '';

    if (index % 3 === 0) {
      string += 'Fizz';
    }

    if (index % 5 === 0) {
      string += 'Buzz';
    }

    result = string === '' ? [...result, index] : [...result, string];
  }

  return result;
}

export function fizzBuzzLeastCommonDenominator(
  number: number,
): Array<string | number> {
  let result: Array<string | number> = [];

  for (let index = 1; index <= number; index++) {
    switch (0) {
      case index % 15: {
        result = [...result, 'FizzBuzz'];

        break;
      }

      case index % 3: {
        result = [...result, 'Fizz'];

        break;
      }

      case index % 5: {
        result = [...result, 'Buzz'];

        break;
      }

      default: {
        result = [...result, index];
      }
    }
  }

  return result;
}
