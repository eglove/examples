export function isValidIpv4(input: string): boolean {
  const parts = input.split('.');

  if (parts.length !== 4) {
    return false;
  }

  for (const part of parts) {
    const number = Number(part);

    if (
      !Number.isFinite(number) ||
      number < 0 ||
      number > 255 ||
      (part.length > 1 && part.startsWith('0'))
    ) {
      return false;
    }
  }

  return true;
}

export function isValidIpv4Regex(input: string): boolean {
  const ipv4RegExp =
    /^((25[0-5]|2[0-4]\d|1?\d{1,2})\.){3}(25[0-5]|2[0-4]\d|1?\d{1,2})$/;

  return ipv4RegExp.test(input);
}
