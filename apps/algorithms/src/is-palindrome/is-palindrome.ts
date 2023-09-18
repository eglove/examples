import { Queue } from '../queue';
import { Stack } from '../stack';

export function isPalindrome(string: string): boolean {
  const lowerCased = string.toLowerCase();
  let reversed = '';

  for (let index = lowerCased.length - 1; index >= 0; index--) {
    reversed += lowerCased[index];
  }

  return reversed === lowerCased;
}

export function isPalindromePointers(string: string): boolean {
  const lowerCased = string.toLowerCase();
  let left = 0;
  let right = lowerCased.length - 1;

  while (left < right) {
    if (lowerCased[left] !== lowerCased[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

export function isPalindromeStack(string: string): boolean {
  const lowerCased = string.toLowerCase();
  const stack = new Stack<string>();
  let reversed = '';

  for (const character of string) {
    stack.push(character);
  }

  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed === lowerCased;
}

export function isPalindromeQueue(string: string): boolean {
  const lowerCased = string.toLowerCase();
  const stack = new Queue<string>();
  let reversed = '';

  for (let index = string.length - 1; index >= 0; index--) {
    stack.enqueue(string[index]);
  }

  while (!stack.isEmpty()) {
    reversed += stack.dequeue();
  }

  return reversed === lowerCased;
}
