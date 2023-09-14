export function generateHashtag(string: string): string | boolean {
  if (string.length > 140 || string === '') {
    return false;
  }

  const hashtag = string
    .split(' ')
    .map(value => {
      const trimmed = value.trim();

      return `${trimmed.charAt(0).toUpperCase()}${trimmed.slice(1)}`;
    })
    .join('');

  if (hashtag === '') {
    return false;
  }

  return `#${hashtag}`;
}

export function generateHashtagRegexReplace(string: string): string | boolean {
  const trimmed = string.trim().replaceAll(/\s+/g, ' ');

  if (trimmed.length > 140 || trimmed === '') {
    return false;
  }

  const hashtag = trimmed.replaceAll(/(^|\s)\S/g, word => {
    return word.toUpperCase();
  });

  return `#${hashtag.replaceAll(/\s/g, '')}`;
}
