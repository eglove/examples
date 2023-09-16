export function validatePassword(password: string): boolean {
  if (password.length < 8) {
    return false;
  }

  let hasUppercase = false;
  let hasLowercase = false;
  let hasDigit = false;

  for (const character of password) {
    const characterCode = character.codePointAt(0);

    if (
      !hasLowercase &&
      characterCode !== undefined &&
      characterCode >= 97 &&
      characterCode <= 122
    ) {
      hasLowercase = true;
    }

    if (
      !hasUppercase &&
      characterCode !== undefined &&
      characterCode >= 65 &&
      characterCode <= 90
    ) {
      hasUppercase = true;
    }

    if (!hasDigit && Number.isInteger(Number(character))) {
      hasDigit = true;
    }

    if (hasUppercase && hasLowercase && hasDigit) {
      return true;
    }
  }

  return false;
}

export function validatePasswordRegex(password: string): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\dA-Za-z]{8,}$/.test(password);
}
