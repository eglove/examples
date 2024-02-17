export function removeDuplicates<ArrayType extends unknown[]>(
  array: ArrayType,
): ArrayType {
  return [...new Set(array)] as unknown as ArrayType;
}
