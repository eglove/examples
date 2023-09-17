// Returns a string with the first letter of each word capitalized.
export function titleCase(string: string): string {
  const words = string.toLowerCase().split(' ');
  let result = '';

  for (const [index, word] of words.entries()) {
    const firstLetter = word.charAt(0).toUpperCase();

    result +=
      index === 0
        ? `${firstLetter}${word.slice(1)}`
        : ` ${firstLetter}${word.slice(1)}`;
  }

  return result;
}

export function titleCaseWithJoin(string: string): string {
  const words = string.toLowerCase().split(' ');

  const newWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return newWords.join(' ');
}

export function titleCaseMapJoin(string: string): string {
  return string
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
