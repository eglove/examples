export function symmetricDifference(
  array1: number[],
  array2: number[],
): number[] {
  const unique1 = new Set(array1);
  const unique2 = new Set(array2);
  const result: number[] = [];

  for (const number of [...array1, ...array2]) {
    if (unique1.has(number) && unique2.has(number)) {
      continue;
    }

    result.push(number);
  }

  return result;
}

export function symmetricDifferenceFilter(
  array1: number[],
  array2: number[],
): number[] {
  const unique1 = new Set(array1);
  const unique2 = new Set(array2);

  const onlyInArray1 = [...unique1].filter(number => {
    return !unique2.has(number);
  });
  const onlyInArray2 = [...unique2].filter(number => {
    return !unique1.has(number);
  });

  return [...onlyInArray1, ...onlyInArray2];
}
