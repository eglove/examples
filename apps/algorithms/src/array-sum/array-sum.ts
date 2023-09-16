export function arraySumRecursive(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }

  return array[0] + arraySumRecursive(array.slice(1));
}

// 300x faster when using immutable recursion method, (as opposed to pop)
export function arraySumIterative(array: number[]): number {
  let sum = 0;

  for (const number of array) {
    sum += number;
  }

  return sum;
}
