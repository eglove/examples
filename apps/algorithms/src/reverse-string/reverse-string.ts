import { LinkedList } from '../linked-list';
import { Queue } from '../queue';
import { Stack } from '../stack';

export function reverseString(string: string): string {
  let reversed = '';

  for (let index = string.length - 1; index >= 0; index--) {
    reversed += string[index];
  }

  return reversed;
}

export function reverseStringBuiltIn(string: string): string {
  return [...string].reverse().join('');
}

export function reverseStringRecursive(string: string): string {
  if (string === '') {
    return '';
  }

  return reverseStringRecursive(string.slice(1)) + string.charAt(0);
}

export function reverseStringStack(string: string): string {
  const stack = new Stack<string>();

  for (const character of string) {
    stack.push(character);
  }

  let reversedString = '';

  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

export function reverseStringQueue(string: string): string {
  const queue = new Queue<string>();

  for (let index = string.length - 1; index >= 0; index--) {
    queue.enqueue(string[index]);
  }

  let reversedString = '';

  while (!queue.isEmpty()) {
    reversedString += queue.dequeue();
  }

  return reversedString;
}

export function reverseStringLinkedList(string: string): string {
  const list = new LinkedList<string>();

  for (let index = string.length - 1; index >= 0; index--) {
    list.add(string[index]);
  }

  let reversedString = '';
  let current = list.head;

  while (current !== null) {
    reversedString += current.data;
    current = current.next;
  }

  return reversedString;
}
