export function powerRecursive(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }

  return base * powerRecursive(base, exponent - 1);
}

export function powerHalf(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    const halfPower = powerHalf(base, exponent / 2);
    return halfPower * halfPower;
  }

  const halfPower = powerHalf(base, (exponent - 1) / 2);
  return base * halfPower * halfPower;
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
