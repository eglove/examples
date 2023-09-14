import { faker } from '@faker-js/faker';

export const LARGE_NUMBER = 10_000;

export function randomNumberArray(length = LARGE_NUMBER): number[] {
  return Array.from({ length })
    .fill(0)
    .map(() => {
      return faker.number.int();
    });
}

export function randomCharacterArray(length = LARGE_NUMBER): string[] {
  return Array.from({ length })
    .fill(0)
    .map(() => {
      return randomString(1);
    });
}

export function randomString(length = LARGE_NUMBER): string {
  return faker.string.alpha({ length });
}
