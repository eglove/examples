export function phoneNumberDirectory(
  phoneNumbers: string[],
): Map<string, string> {
  const result = new Map<string, string>();

  for (const phoneNumber of phoneNumbers) {
    const [name, number] = phoneNumber.split(':');

    result.set(name, number);
  }

  return result;
}
