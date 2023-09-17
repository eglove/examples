import { assert, describe, it } from 'vitest';

import { permutationsOptimized, permutationsRecursive } from './permutations';

const testCases: Array<[string, string[]]> = [
  ['abc', ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']],
  ['dog', ['dgo', 'dog', 'gdo', 'god', 'odg', 'ogd']],
];

describe('permutations', () => {
  it.each(testCases)('recursive', (string, result) => {
    assert.deepEqual(permutationsRecursive(string).toSorted(), result);
  });

  it.each(testCases)('optimized', (string, result) => {
    assert.deepEqual(permutationsOptimized(string).toSorted(), result);
  });
});
