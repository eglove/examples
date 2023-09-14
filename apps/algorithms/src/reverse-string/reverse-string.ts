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
