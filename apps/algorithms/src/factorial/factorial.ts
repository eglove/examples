export function factorial(number: number): number {
  if (number === 0 || number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

// 6x faster
export function factorialIterative(number: number): number {
  let result = 1;

  for (let index = number; index >= 2; index--) {
    result *= index;
  }

  return result;
}
