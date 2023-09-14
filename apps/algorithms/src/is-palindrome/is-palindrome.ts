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
