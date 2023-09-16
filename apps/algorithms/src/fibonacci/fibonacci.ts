// prone to failure because of call stack size
export function fibonacci(number: number): number {
  if (number === 0) {
    return 0;
  }

  if (number === 1) {
    return 1;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
}

// 7x faster
export function fibonacciDynamic(number: number): number {
  if (number <= 0) {
    return 0;
  }

  let previous = 0;
  let current = 1;

  for (let index = 2; index <= number; index++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}
