export function countOccurrences(string: string, character: string): number {
  let count = 0;

  for (const character_ of string) {
    if (character === character_) {
      count++;
    }
  }

  return count;
}

export function countOccurrencesSplit(
  string: string,
  character: string,
): number {
  return string.split(character).length - 1;
}
