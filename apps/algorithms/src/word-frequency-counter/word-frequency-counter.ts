type WordFrequency = Map<string, number>;

export function wordFrequencyCounter(string: string): WordFrequency {
  const result: WordFrequency = new Map();

  for (const word of string.toLowerCase().split(' ')) {
    const cleanWord = word.replaceAll(/\p{P}/gu, '');

    result.set(cleanWord, (result.get(cleanWord) ?? 0) + 1);
  }

  return result;
}
