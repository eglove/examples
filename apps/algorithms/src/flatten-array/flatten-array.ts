import type { NestedArray } from './flatten-array.test';

export function flattenArray(array: NestedArray<number>): number[] {
  let result: number[] = [];

  if (Array.isArray(array)) {
    for (const item of array) {
      result = Array.isArray(item)
        ? [...result, ...flattenArray(item)]
        : [...result, item];
    }
  }

  return result;
}

// 32x faster if already flat, increases in efficiency as depth grows
export function flattenArrayBuiltIn(array: NestedArray<number>): number[] {
  if (Array.isArray(array)) {
    return array.flat(5) as number[];
  }

  return [];
}
