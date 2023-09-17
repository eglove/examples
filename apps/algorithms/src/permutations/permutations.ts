export function permutationsRecursive(string: string): string[] {
  let result: string[] = [];

  if (string.length === 0) {
    result = [...result, ''];
    return result;
  }

  for (let index = 0; index < string.length; index++) {
    const firstCharacter = string[index];
    const restOfString = string.slice(0, index) + string.slice(index + 1);
    const subPermutations = permutationsRecursive(restOfString);

    for (const subPermutation of subPermutations) {
      result = [...result, firstCharacter + subPermutation];
    }
  }

  return result;
}

export function permutationsOptimized(string: string): string[] {
  let result: string[] = [];
  generate(string.length, [...string]);

  function generate(length: number, chars: string[]): void {
    if (length === 1) {
      result = [...result, chars.join('')];
    } else {
      for (let index = 0; index < length - 1; index++) {
        generate(length - 1, chars);
        const index_ = length % 2 === 0 ? index : 0;
        [chars[index_], chars[length - 1]] = [chars[length - 1], chars[index_]]; // swap
      }

      generate(length - 1, chars);
    }
  }

  return result;
}
