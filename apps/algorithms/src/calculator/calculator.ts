export function calculator(
  number1: number,
  number2: number,
  operator: '+' | '-' | '*' | '/',
): number {
  switch (operator) {
    case '+': {
      return number1 + number2;
    }

    case '-': {
      return number1 - number2;
    }

    case '*': {
      return number1 * number2;
    }

    default: {
      return number1 / number2;
    }
  }
}
