export function findMaxNumber(array: number[]): number {
  let largest = array[0];

  for (const number of array) {
    if (number > largest) {
      largest = number;
    }
  }

  return largest;
}

export function findMaxNumberMath(array: number[]): number {
  return Math.max(...array);
}
