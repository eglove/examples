const alphabetString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// O(n^2)
export function missingLetter(characters: string[]): string {
  const start = alphabetString.indexOf(characters[0]);

  for (
    let alphabetIndex = start + 1;
    alphabetIndex < alphabetString.length;
    alphabetIndex++
  ) {
    if (!characters.includes(alphabetString.charAt(alphabetIndex))) {
      return alphabetString.charAt(alphabetIndex);
    }
  }

  return '';
}

// O(n)
export function missingLetterSet(characters: string[]): string {
  const charSet = new Set(characters);
  const start = alphabetString.indexOf(characters[0]);

  for (
    let alphabetIndex = start + 1;
    alphabetIndex < alphabetString.length;
    alphabetIndex++
  ) {
    if (!charSet.has(alphabetString[alphabetIndex])) {
      return alphabetString.charAt(alphabetIndex);
    }
  }

  return '';
}

// O(n)
export function missingLetterCharCode(characters: string[]): string {
  let start = characters[0].codePointAt(0);

  for (const character of characters) {
    const code = character.codePointAt(0);

    if (code !== undefined && start !== undefined && code - start > 1) {
      return String.fromCodePoint(start + 1);
    }

    start = code;
  }

  return '';
}
