export function formatPhoneNumber(numbers: number[]): string {
  const part1 = numbers.slice(0, 3).join('');
  const part2 = numbers.slice(3, 6).join('');
  const part3 = numbers.slice(6, 10).join('');

  return `(${part1}) ${part2}-${part3}`;
}
