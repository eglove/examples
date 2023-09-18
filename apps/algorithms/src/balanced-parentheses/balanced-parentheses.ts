import { Stack } from '../stack';

export function isBalanced(string: string): boolean {
  const stack = new Stack<string>();

  for (const character of string) {
    if (character === '(') {
      stack.push(character);
    } else if (character === ')') {
      if (stack.isEmpty()) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.isEmpty();
}

export function isBalancedArray(string: string): boolean {
  const stack: string[] = [];

  for (const character of string) {
    if (character === '(') {
      stack.push(character);
    } else if (character === ')') {
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}
