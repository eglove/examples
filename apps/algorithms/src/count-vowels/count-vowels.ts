const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

export function countVowels(string: string): number {
  let count = 0;

  for (const character of string) {
    if (vowels.has(character)) {
      count++;
    }
  }

  return count;
}
