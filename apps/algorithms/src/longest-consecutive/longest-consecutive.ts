export function longestConsecutive(numbers: number[]): number {
  const foundNumbers = new Set<number>(numbers);
  let longestSequence = 0;

  for (const number of foundNumbers) {
    if (!foundNumbers.has(number - 1)) {
      let currentNumber = number;
      let currentSequence = 1;

      while (foundNumbers.has(currentNumber + 1)) {
        currentNumber++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
}
