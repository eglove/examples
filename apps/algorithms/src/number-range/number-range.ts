export function numberRange(startNumber: number, endNumber: number): number[] {
  let result: number[] = [];

  for (let index = startNumber; index <= endNumber; index++) {
    result = [...result, index];
  }

  return result;
}

export function numberRangeRecursive(
  startNumber: number,
  endNumber: number,
): number[] {
  if (startNumber === endNumber) {
    return [startNumber];
  }

  let numbers = numberRangeRecursive(startNumber, endNumber - 1);
  numbers = [...numbers, endNumber];
  return numbers;
}
