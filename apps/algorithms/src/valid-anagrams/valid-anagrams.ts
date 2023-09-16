// Time Complexity: O(n)
export function validAnagrams(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) {
    return false;
  }

  const characterCount = new Map<string, number>();

  for (const character of string1) {
    characterCount.set(character, (characterCount.get(character) ?? 0) + 1);
  }

  for (const character of string2) {
    const retrievedCharacter = characterCount.get(character);

    if (retrievedCharacter === undefined || retrievedCharacter < 1) {
      return false;
    }

    characterCount.set(character, retrievedCharacter - 1);
  }

  return true;
}

// Time Complexity: O(n log(n))
export function validAnagramsSort(string1: string, string2: string): boolean {
  return [...string1].sort().join('') === [...string2].sort().join('');
}
