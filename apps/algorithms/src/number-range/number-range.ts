export function numberRange(startNumber: number, endNumber: number): number[] {
  const result = [];

  for (let index = startNumber; index <= endNumber; index++) {
    result.push(index);
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

  const numbers = numberRangeRecursive(startNumber, endNumber - 1);
  numbers.push(endNumber);
  return numbers;
}
