export function fizzBuzz(number: number): Array<string | number> {
  const result = [];

  for (let index = 1; index <= number; index++) {
    let string = '';

    if (index % 3 === 0) {
      string += 'Fizz';
    }

    if (index % 5 === 0) {
      string += 'Buzz';
    }

    if (string === '') {
      result.push(index);
    } else {
      result.push(string);
    }
  }

  return result;
}

export function fizzBuzzLeastCommonDenominator(
  number: number,
): Array<string | number> {
  const result = [];

  for (let index = 1; index <= number; index++) {
    switch (0) {
      case index % 15: {
        result.push('FizzBuzz');

        break;
      }

      case index % 3: {
        result.push('Fizz');

        break;
      }

      case index % 5: {
        result.push('Buzz');

        break;
      }

      default: {
        result.push(index);
      }
    }
  }

  return result;
}
