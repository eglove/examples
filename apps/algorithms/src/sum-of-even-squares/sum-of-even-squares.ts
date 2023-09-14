export function sumOfEvenSquares(numbers: number[]): number {
  let sum = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      sum += number * number;
    }
  }

  return sum;
}
