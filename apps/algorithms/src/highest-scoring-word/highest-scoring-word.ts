export function highestScoringWord(string: string): string {
  const words = string.toLowerCase().split(' ');
  let result = words[0];
  let highestScore = 0;

  for (const word of words) {
    let score = 0;

    for (let index = 0; index < word.length; index++) {
      // Use ASCII value https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
      score += (word.codePointAt(index) ?? 0) - 96;
    }

    if (score > highestScore) {
      highestScore = score;
      result = word;
    }
  }

  return result;
}
