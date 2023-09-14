export function removeDuplicates<ArrayType extends Array<unknown>>(
  array: ArrayType,
): ArrayType {
  return [...new Set(array)] as unknown as ArrayType;
}
