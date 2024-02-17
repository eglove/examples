export function hasAllUniqueCharacters(string: string): boolean {
  const unique = new Set();

  for (const character of string) {
    if (unique.has(character)) {
      return false;
    }

    unique.add(character);
  }

  return true;
}

/*
 * Slowest, creating a Set requires looping over the entire array, both other methods
 * have early returns and roughly the same performance
 */
export function hasAllUniqueCharactersSizeCompare(string: string): boolean {
  return new Set(string).size === string.length;
}

export function hasAllUniqueCharactersObject(string: string): boolean {
  let charCount: Record<string, boolean> = {};

  for (const character of string) {
    if (charCount[character]) {
      return false;
    }

    charCount = {
      ...charCount,
      [character]: true,
    };
  }

  return true;
}
