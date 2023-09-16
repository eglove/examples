export function powerRecursive(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }

  return base * powerRecursive(base, exponent - 1);
}

// fastest (obviously)
export function powerBuiltIn(base: number, exponent: number): number {
  return base ** exponent;
}

export function powerIterative(base: number, exponent: number): number {
  let result = base;

  for (let index = 0; index < exponent - 1; index++) {
    result *= base;
  }

  return result;
}
