// O(n^2)
export function arrayIntersection(
  array1: number[],
  array2: number[],
): number[] {
  const intersectionArray: number[] = [];

  for (const number of array1) {
    if (array2.includes(number) && !intersectionArray.includes(number)) {
      intersectionArray.push(number);
    }
  }

  return intersectionArray;
}

// O(n)
export function arrayIntersectionSet(
  array1: number[],
  array2: number[],
): number[] {
  const [smaller, larger] =
    array1.length <= array2.length ? [array1, array2] : [array2, array1];

  const smallerSet = new Set(smaller);

  return larger.filter(item => {
    return smallerSet.has(item);
  });
}