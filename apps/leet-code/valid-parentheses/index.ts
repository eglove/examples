export function isValidParentheses(s: string): boolean {
  const stack: string[] = [];
  const mapping: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let index = 0; index < s.length; index++) {
    const character = s.charAt(index);

    if (character === '(' || character === '[' || character === '{') {
      stack.push(character);
    } else if (stack.length === 0 || stack.pop() !== mapping[character]) {
      return false;
    }
  }

  return stack.length === 0;
}
