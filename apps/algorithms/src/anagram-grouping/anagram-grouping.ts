export function anagramGrouping(words: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const word of words) {
    const sortedCharacters = [...word].toSorted().join('');

    if (groups.has(sortedCharacters)) {
      groups.get(sortedCharacters)?.push(word);
    } else {
      groups.set(sortedCharacters, [word]);
    }
  }

  return [...groups.values()];
}
