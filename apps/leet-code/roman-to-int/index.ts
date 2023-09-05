export function romanToInt(s: string): number {
  const map: { [index: string]: number } = {
    C: 100,
    D: 500,
    I: 1,
    L: 50,
    M: 1000,
    V: 5,
    X: 10,
  };
  let sum: number = 0;
  let index: number = 0;

  for (; index < s.length; index++) {
    if (
      index + 1 < s.length &&
      map[s.charAt(index)] < map[s.charAt(index + 1)]
    ) {
      sum -= map[s.charAt(index)];
    } else {
      sum += map[s.charAt(index)];
    }
  }

  return sum;
}
