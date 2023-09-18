export function twoSum(numbers: number[], target: number): number[] {
  const foundNumbers = new Set<number>();

  for (const [index, number_] of numbers.entries()) {
    const complement = target - number_;

    if (foundNumbers.has(complement)) {
      return [numbers.indexOf(complement), index];
    }

    foundNumbers.add(number_);
  }

  return [];
}
