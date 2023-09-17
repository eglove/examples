export function anagramGrouping(words: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const word of words) {
    const sortedCharacters = [...word]
      .toSorted((a, b) => {
        return a.localeCompare(b);
      })
      .join('');

    if (groups.has(sortedCharacters)) {
      const group = groups.get(sortedCharacters);

      if (group) {
        groups.set(sortedCharacters, [...group, word]);
      }
    } else {
      groups.set(sortedCharacters, [word]);
    }
  }

  return [...groups.values()];
}
