export function firstNonRepeatingCharacter(string: string): string | null {
  let found: Record<string, number> = {};

  for (const character of string) {
    found = {
      ...found,
      [character]: (found[character] ?? 0) + 1,
    };
  }

  for (const [character, count] of Object.entries(found)) {
    if (count === 1) {
      return character;
    }
  }

  return null;
}

export function firstNonRepeatingCharacterMap(string: string): string | null {
  const found = new Map<string, number>();

  for (const character of string) {
    found.set(character, (found.get(character) ?? 0) + 1);
  }

  for (const [character, count] of found) {
    if (count === 1) {
      return character;
    }
  }

  return null;
}
