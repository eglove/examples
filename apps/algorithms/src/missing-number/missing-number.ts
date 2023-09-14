export function missingNumber(numbers: number[]): number {
  if (numbers.length === 0) {
    return 1;
  }

  const n = numbers.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (const number of numbers) {
    actualSum += number;
  }

  return expectedSum - actualSum;
}
